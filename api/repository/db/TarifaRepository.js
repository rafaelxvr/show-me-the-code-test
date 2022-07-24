const { tarifas } = require('../../config/database')
const { Tarifa } = require('../../domain/entities/Tarifa')
const PlanoRepository = require('./PlanoRepository.js')
const { herbarium } = require('@herbsjs/herbarium')

/* Classe responsável pelo cálculo do custo da tarifa de chamadas baseada no plano e duração da chamada */
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
    console.log(args)
    try {
      const Plano = new PlanoRepository();
      const infoPlano = Plano.BuscarPlano(args.plano);
      const valorTarifa = this.BuscarValorTarifa(args.origem, args.destino);
      
      const custo = {};
      custo.origem = args.origem;
      custo.destino = args.destino;
      custo.valorPorMinuto = valorTarifa[0].valorMinuto;
      custo.valorTotalComPlano = 0;

      if (infoPlano[0].minutos > 0 && args.duracao > infoPlano[0].minutos) {
          let duracaoComPlano = args.duracao - infoPlano[0].minutos;
          custo.valorTotalComPlano = (((valorTarifa[0].valorMinuto * 0.10) + valorTarifa[0].valorMinuto) * duracaoComPlano);
      }
      
      custo.valorTotalSemPlano = (args.duracao * valorTarifa[0].valorMinuto);

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
