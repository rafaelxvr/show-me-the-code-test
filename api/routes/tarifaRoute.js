const router = require('express').Router()
const dependency = {
    ObterCustoChamadas: require('../domain/usecases/ObterCustoChamada').ObterCustoChamadas
} 

/* Uma rota da API que é utilizada para calcular o custo de uma chamada. */
router.get('/', async (req, res) => {
        const di = Object.assign({}, dependency, req.injection)
        const usecase = di.ObterCustoChamadas(req.injection)
        
        const hasAccess = await usecase.authorize()
        if (hasAccess === false) {
            throw new ForbiddenError()
        }
        
        const caseResponse = await usecase.run({
            origem: req.query.origem,
            destino: req.query.destino,
            duracao: req.query.duracao,
            plano: req.query.plano,
        });

        console.info(usecase.auditTrail);
        
        if (caseResponse.Err) throw new UserInputError(null, { invalidArgs: caseResponse.err })
        return res.json(caseResponse.ok)
    }
) 

/**
 * @swagger
 * /tarifa:
 *  get:
 *    tags: [tarifa]
 *    description:
 *    responses:
 *      '200':
 *        description: Obtém custo de chamada da api falemais
 *    parameters: origem: req.query.origem,
            destino: req.query.destino,
            duracao: req.query.duracao,
            plano: req.query.plano,
 */

module.exports = router
