const { Plano } = require('../domain/entities/Plano.js')
const assert = require('assert')
const { herbarium } = require('@herbsjs/herbarium');

describe('Teste plano', () => {

    describe('Plano válido', () => {

        it('Deve possuir um nome válido', async () => {
            // Given
            const novoPlano = new Plano()

            // When
            novoPlano.nome = "FaleMais360"
            novoPlano.minutos = 360

            // Then
            assert.ok(novoPlano.isValid())
        })
    })

    describe('Plano inválido', () => {

        it('Deve possuir um nome inválido', async () => {
            // Given
            const novoPlano = new Plano()

            // When
            novoPlano.nome = "Plano";
            novoPlano.minutos = "360";

            // Then
            
            assert.ok(!novoPlano.isValid())
        })
    })

})
