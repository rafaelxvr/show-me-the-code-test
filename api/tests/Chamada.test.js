const { Chamada } = require('../domain/entities/Chamada.js');
const assert = require('assert');
const { herbarium } = require('@herbsjs/herbarium');

describe('Teste Chamada', () => {

    describe('Chamada válida', () => {

        it('Deve possuir valores válidos', async () => {
            // Given
            const novaChamada = new Chamada()

            // When
            novaChamada.origem = "011";
            novaChamada.destino = "018";
            novaChamada.valorPorMinuto = '1.90';
            novaChamada.duracao = '30';
            novaChamada.valorTotal = '57'; 

            // Then
            assert.ok(novaChamada.isValid())
        })
    })

    describe('Chamada inválida', () => {

        it('Deve possuir valores inválidos', async () => {
            // Given
            const novaChamada = new Chamada()

            // When
            novaChamada.origem = 11;
            novaChamada.destino = 18;
            novaChamada.valorPorMinuto = 1.90;
            novaChamada.duracao = 30;
            novaChamada.valorTotal = 57; 

            // Then           
            assert.ok(!novaChamada.isValid())
        })
    })

})
