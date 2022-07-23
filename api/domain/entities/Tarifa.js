const { entity, field } = require('@herbsjs/herbs');
const { herbarium } = require('@herbsjs/herbarium')

const Tarifa = entity('Tarifa', {
  origem: field(String),
  destino: field(String),
  duracao: field(String),
  plano: field(String)
})

module.exports.Tarifa =
  herbarium.entities
    .add(Tarifa, 'Tarifa')
    .entity
