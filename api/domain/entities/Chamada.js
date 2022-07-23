const { entity, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium');

const Chamada = entity('Chamada', {
  origem: field(String),
  destino: field(String),
  duracao: field(Number),
  valorPorMinuto: field(Number),
  valorTotal: field(Number), 
})

module.exports.Chamada =
  herbarium.entities
    .add(Chamada, 'Chamada')
    .entity
