const { planos } = require('../../config/database')
const { herbarium } = require('@herbsjs/herbarium')
const { Plano } = require('../../domain/entities/Plano')

/* Classe que possui um método que retorna a lista de planos existentes*/
class PlanoRepository {
  BuscarPlano(nome) {
    try {
      const dbPlanos = planos;
      return dbPlanos.filter((x) => {
        return x.nome === nome});

    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports =
    herbarium.repositories
        .add(PlanoRepository, 'PlanoRepository')
        .metadata({ entity: Plano })
        .repository

