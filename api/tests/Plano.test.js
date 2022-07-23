const { Plano } = require('../domain/entities/Plano.js')
const assert = require('assert')

describe('Teste plano', () => {

    describe('Plano válido', () => {

        it('Deve possuir um nome válido', async () => {
            // Given
            const novoPlano = new Plano()

            // When
            novoPlano.nome = "Meu novo plano 360"

            // Then
            assert.ok(novoPlano.isValid())
        })
    })

    describe('Plano inválido', () => {

        it('Deve possuir um nome inválido', async () => {
            // Given
            const novoPlano = new Plano()

            // When
            novoPlano.nome = "Plano"

            // Then
            
            assert.ok(!novoPlano.isValid())
            assert.deepEqual(novoPlano.errors, { nome: [ { isTooShort: 6 } ]} )
        })
    })

})
