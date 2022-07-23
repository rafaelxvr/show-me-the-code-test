const { Ok, usecase, step, ifElse, Err } = require('@herbsjs/herbs')
const { Tarifa } = require('../entities/Tarifa')
const { Chamada } = require('../entities/Chamada');
const { herbarium } = require('@herbsjs/herbarium');

const dependency = {TarifaRepository: require('../../repository/db/TarifaRepository')};

 const ObterCustoChamadas = (injection) =>  
  usecase('Obtém custo de chamada por plano e DDD', {
    request: {
      origem: String,
      destino: String,
      duracao: String, 
      plano: String
    },

    response: [Chamada],

    authorize: async () => Ok(),

    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    'Verifica se os parâmetros são válidos': step(ctx => {
      const req = ctx.req;
      const tarifa = ctx.tarifa = new Tarifa()
      tarifa.origem = req.origem;
      tarifa.destino = req.destino;
      tarifa.duracao = req.duracao;
      tarifa.plano = req.plano;

      if (!tarifa.isValid()) return Err.invalidEntity ({
        message: `Tarifa é inválido`,
        payload: { entity: 'Tarifa'},
        cause: JSON.stringify(tarifa.errors)
      });

      return Ok()
    }),

    'Retorna custo de chamada': step(async ctx => {
      const tarifaRepo = new ctx.di.TarifaRepository(injection);
      const tarifa = ctx.tarifa;
      return (ctx.ret = await tarifaRepo.CalcularPrecoChamada(tarifa));
    }),
  })

  module.exports.ObterCustoChamadas = 
    herbarium.usecases
    .add(ObterCustoChamadas, 'ObterCustoChamadas')
    .metadata({ group: 'Chamada', operation: herbarium.crud.other, entity: Chamada })
    .usecase
