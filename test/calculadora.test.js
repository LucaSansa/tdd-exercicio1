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
        let props = calculadora.montarPropostas2({
            nome: 'Maria da Silva',
            salario: 2000.00,
            idade: 25,
            valorFinanciado: 1000.00
        });

        expect(props.length).toBe(3);
        expect(props[0]).toBeDeepCloseTo({
            total: 1300.00,
            parcelas: 2,
            valorParcela: 650.00
        }, 2);

        expect(props[1]).toBeDeepCloseTo({
            total: 1500.00,
            parcelas: 4,
            valorParcela: 375.00
        }, 2);

        expect(props[2]).toBeDeepCloseTo({
            total: 1500.00,
            parcelas: 10,
            valorParcela: 150.00
        }, 2);
        
    });

    test('cliente que ganha mais de 5001', () => {
        let props = calculadora.montarPropostas3({
            nome: 'Roberto Carlos',
            salario: 6000,
            idade: 40,
            valorFinanciado: 1000.00
        });

        expect(props.length).toBe(4);
        expect(props[0]).toBeDeepCloseTo({
            total: 1100.00,
            parcelas: 2,
            valorParcela: 550.00
        }, 2);

        expect(props[1]).toBeDeepCloseTo({
            total: 1300.00,
            parcelas: 4,
            valorParcela: 325.00
        }, 2);

        expect(props[2]).toBeDeepCloseTo({
            total: 1300.00,
            parcelas: 10,
            valorParcela: 130.00
        }, 2);

        expect(props[3]).toBeDeepCloseTo({
            total: 1400.00,
            parcelas: 20,
            valorParcela: 70.00
        }, 2);

    });


});