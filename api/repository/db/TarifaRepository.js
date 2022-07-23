const { tarifas } = require('../../config/database')
const { Tarifa } = require('../../domain/entities/Tarifa')
const PlanoRepository = require('./PlanoRepository.js')
const { herbarium } = require('@herbsjs/herbarium')

class TarifaRepository {
  constructor(args) {
    this.args = args;
  };

  BuscarValorTarifa(origem, destino) {;
    try {
      const dbTarifas = tarifas;
      return dbTarifas.filter((x) => { 
        return x.origem == origem && x.destino == destino});

    } catch (err) {
      throw new Error(err)
    }
  }

  async CalcularPrecoChamada(args) {
    try {
      const Plano = new PlanoRepository();
      const infoPlano = Plano.BuscarPlano(args.plano);
      const valorTarifa = this.BuscarValorTarifa(args.origem, args.destino);
      
      const custo = {};

      switch (true) {
        case (infoPlano[0].minutos > 0 && args.duracao > infoPlano[0].minutos): /* Cálculo COM PLANO e DURACAO ultrapassando o limite*/
          custo.origem = args.origem;
          custo.destino = args.destino;
          let duracaoComPlano = args.duracao - infoPlano[0].minutos;
          custo.valorPorMinuto = valorTarifa[0].valorMinuto;
          custo.valorTotalComPlano = (((valorTarifa[0].valorMinuto * 0.10) + valorTarifa[0].valorMinuto) * duracaoComPlano);
          custo.valorTotalSemPlano = (args.duracao * valorTarifa[0].valorMinuto);
          break;
        case (args.duracao < infoPlano[0].minutos): /* Cálculo COM PLANO e duração abaixo do limite */
          custo.origem = args.origem;
          custo.destino = args.destino;
          custo.valorPorMinuto = valorTarifa[0].valorMinuto;
          custo.valorTotalComPlano = 0;
          custo.valorTotalSemPlano = (args.duracao * valorTarifa[0].valorMinuto)
          break;
      };

      if (typeof custo !== "undefined"){
        return(custo);
      };

      } catch (err) {
        throw new Error(err)
      }
  }
}

module.exports =
    herbarium.repositories
        .add(TarifaRepository, 'TarifaRepository')
        .metadata({ entity: Tarifa })
        .repository
