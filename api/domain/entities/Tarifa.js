const { entity, field } = require('@herbsjs/herbs');
const { herbarium } = require('@herbsjs/herbarium')

const Tarifa = entity('Tarifa', {
  origem: field(String, {
    validation: { presence: true, type: String }
  }),
  destino: field(String, {
    validation: { presence: true, type: String }
  }),
  duracao: field(String, {
    validation: { presence: true, type: String }
  }),
  plano: field(String, {
    validation: { presence: true, type: String }
  })
})

module.exports.Tarifa =
  herbarium.entities
    .add(Tarifa, 'Tarifa')
    .entity
