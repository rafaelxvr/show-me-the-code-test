const { entity, field } = require('@herbsjs/herbs');
const { herbarium } = require('@herbsjs/herbarium');

const Plano = entity('Plano', {
  nome: field(String, {
    validation: { presence: true, length: { minimum: 6 } }
  }),
  minutos: field(Number, {
    validation: { presence: true, type: Number }
  }),
})

module.exports.Plano =
  herbarium.entities
    .add(Plano, 'Plano')
    .entity