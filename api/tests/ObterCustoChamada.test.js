const assert = require('assert')
const { Ok } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium');
const dependency = {
    ObterCustoChamadas: require('../domain/usecases/ObterCustoChamada').ObterCustoChamadas
} 

describe('', () => {

    it('Retorna o valor da tarifa com plano e sem plano', async() => {
        // Given
        const req = {
            origem: '011',
            destino: '018',
            duracao: '70',
            plano: 'FaleMais60',
        }

        const di = Object.assign({}, dependency, req.injection)
        const usecase = di.ObterCustoChamadas(req.injection)

        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }

        // When
        const caseResponse = await usecase.run({
            origem: req.origem,
            destino: req.destino,
            duracao: req.duracao,
            plano: req.plano,
        });

        console.info(usecase.auditTrail);
        
        // Then
        if (caseResponse.Err) throw new UserInputError(null, { invalidArgs: caseResponse.err })
        assert.ok(typeof caseResponse.ok !== "undefined") 
        assert.strictEqual(caseResponse.ok.valorTotalComPlano, 9.9)
        assert.strictEqual(caseResponse.ok.valorTotalSemPlano, 63)
    })

    it('Retorna o valor da tarifa ZERO quando não ultrapassa os minutos do plano', async() => {
        // Given
        const req = {
            origem: '011',
            destino: '018',
            duracao: '70',
            plano: 'FaleMais120',
        }

        const di = Object.assign({}, dependency, req.injection)
        const usecase = di.ObterCustoChamadas(req.injection)

        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }

        // When
        const caseResponse = await usecase.run({
            origem: req.origem,
            destino: req.destino,
            duracao: req.duracao,
            plano: req.plano,
        });

        console.info(usecase.auditTrail);

        // Then
        if (caseResponse.Err) throw new UserInputError(null, { invalidArgs: caseResponse.err })
        assert.ok(typeof caseResponse.ok !== "undefined")
        assert.strictEqual(caseResponse.ok.valorTotalComPlano, 0)
        assert.strictEqual(caseResponse.ok.valorTotalSemPlano, 63)
    })
})