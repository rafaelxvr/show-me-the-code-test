const assert = require('assert')
const { Ok } = require('@herbsjs/herbs')
const dependency = {
    ObterCustoChamadas: require('../domain/usecases/ObterCustoChamada').ObterCustoChamadas
} 

describe('', () => {

    it('Retorna o valor da tarifa COM plano', async() => {
        // Given
        const injection = {
            origem: '011',
            destino: '018',
            duracao: 70,
            plano: 'FaleMais 60',
        }

        const di = Object.assign({}, dependency, injection)
        const usecase = di.ObterCustoChamadas(injection)

        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }

        // When
        const caseResponse = await usecase.run(injection);

        // Then
        if (caseResponse.Err) throw new UserInputError(null, { invalidArgs: caseResponse.err })
        assert.ok(caseResponse.isOk)
        assert.strictEqual(caseResponse.ok.valorTotal, 9.90)
    })

    it('Retorna o valor da tarifa SEM plano', async() => {
        // Given
        const injection = {
            origem: '011',
            destino: '018',
            duracao: 70,
            plano: 'Sem Plano',
        }

        const di = Object.assign({}, dependency, injection)
        const usecase = di.ObterCustoChamadas(injection)

        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }

        // When
        const caseResponse = await usecase.run(injection);

        // Then
        assert.ok(caseResponse.isOk)
        assert.strictEqual(ret.ok.valorTotal, 63)
    })

    it('Retorna o valor da tarifa ZERO quando não ultrapassa os minutos do plano', async() => {
        // Given
        const injection = {
            origem: '011',
            destino: '018',
            duracao: 70,
            plano: 'FaleMais 120',
        }

        const di = Object.assign({}, dependency, injection)
        const usecase = di.ObterCustoChamadas(injection)

        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }

        // When
        const caseResponse = await usecase.run(injection);

        // Then
        assert.ok(caseResponse.isOk)
        assert.strictEqual(ret.ok.valorTotal, 0)
    })
})