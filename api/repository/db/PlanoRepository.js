const { planos } = require('../../config/database')
const { herbarium } = require('@herbsjs/herbarium')
const { Plano } = require('../../domain/entities/Plano')

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

