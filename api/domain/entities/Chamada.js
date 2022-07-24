const { entity, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium');

/* Cria uma nova entidade chamada Plano com os campos: origem, destino, duracao, valorPorMinuto e valorTotal. */
const Chamada = entity('Chamada', {
  origem: field(String, {
    validation: { presence: true, type: String }
  }),
  destino: field(String, {
    validation: { presence: true, type: String }
  }),
  duracao: field(String, {
    validation: { presence: true, type: String }
  }),
  valorPorMinuto: field(String, {
    validation: { presence: true, type: String }
  }),
  valorTotal: field(String, {
    validation: { presence: true, type: String }
  })
})

module.exports.Chamada =
  herbarium.entities
    .add(Chamada, 'Chamada')
    .entity
