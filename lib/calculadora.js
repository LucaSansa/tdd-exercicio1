class Calculadora{
    montarPropostas(cliente){
        const propostas = [];
        propostas.push({
            total: 2 * cliente.valorFinanciado,
            parcelas: 2,
            valorParcela: (2 * cliente.valorFinanciado) / 2
        });

        propostas.push({
            total: 2 * cliente.valorFinanciado,
            parcelas: 3,
            valorParcela: (2 * cliente.valorFinanciado) / 3
        });

        return propostas;

    }

    /*montarPropostas(cliente2){
        const propostas = [];
        propostas.push({
            total: (1,3) * cliente2.valorFinanciado,
            parcelas: 2,
            valorParcela: ((1,3) * cliente2.valorFinanciado) / 2
        });



        return propostas;

    }*/

}

module.exports = Calculadora;