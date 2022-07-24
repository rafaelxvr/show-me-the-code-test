const { Tarifa } = require('../domain/entities/Tarifa')
const assert = require('assert')
const { herbarium } = require('@herbsjs/herbarium');

describe('Teste Tarifa', () => {

    describe('Tarifa válida', () => {

        it('Deve possuir valores válidos', async () => {
            // Given
            const novaTarifa = new Tarifa()

            // When
            novaTarifa.origem = "011";
            novaTarifa.destino = "018";
            novaTarifa.duracao = '150';
            novaTarifa.plano = 'FaleMais120'; 

            // Then
            assert.ok(novaTarifa.isValid())
        })
    })

    describe('Tarifa inválida', () => {

        it('Deve possuir valores inválidos', async () => {
            // Given
            const novaTarifa = new Tarifa()

            // When
            novaTarifa.origem = 11;
            novaTarifa.destino = 18;
            novaTarifa.duracao = 150;
            novaTarifa.plano = 120;

            // Then           
            assert.ok(!novaTarifa.isValid())
        })
    })

})
