const { toBeDeepCloseTo }
    = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const Calculadora = require('../lib/calculadora');
const calculadora = new Calculadora();

describe('Calculadora', () => {
    test('cliente que ganha menos de 1000', () => {
        let props = calculadora.montarPropostas({
            nome: 'Joao da Silva',
            salario: 800.00,
            idade: 29,
            valorFinanciado: 1000.00
        });
        
        
        expect(props.length).toBe(2);
        expect(props[0]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 2,
            valorParcela: 1000.00
        }, 2);
        expect(props[1]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 3,
            valorParcela: 666.66
        }, 2);


    });


    test('cliente que ganha de 1001 a 5000', () =>{
        let cliente = {
            nome: 'Maria da Silva',
            salario: 2000.00,
            idade: 25,
            valorFinanciado: 1000.00
        };
        
    });
});