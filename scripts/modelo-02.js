/*
Você trabalha como estagiário em uma loja de games e seu chefe pediu para analisar as
vendas da semana. A loja registrou quantos jogos foram vendidos em cada dia:

[15, 12, 8, 10, 25, 30, 18]  // Domingo a Sábado

Essa semana houve lançamento de um jogo muito esperado na sexta-feira, o que
explica o aumento nas vendas.

Desenvolva um programa que:
1. Identifique em qual dia houve o maior número de vendas
2. Calcule o total de jogos vendidos na semana
3. Conte quantos dias tiveram vendas acima de 15 jogos (considerados "dias bons")
4. Calcule quanto a loja faturou, sabendo que cada jogo custa em média R$ 250
*/

const vendasJogos = [15, 12, 8, 10, 25, 30, 18];

const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let maiorVenda = vendasJogos[0];
let diaMaiorVenda = "";

let totalJogosVendidos = 0;

let diasBons = 0;

for (let i = 0; i < vendasJogos.length; i++) {
    if (vendasJogos[i] > maiorVenda) {
        maiorVenda = vendasJogos[i];
        diaMaiorVenda = diasDaSemana[i];
    }

    totalJogosVendidos += vendasJogos[i];

    if (vendasJogos[i] > 15) {
        diasBons++;
    }
}
console.log(`Dia com mais vendas: ${diaMaiorVenda} com ${maiorVenda} jogos vendidos`);

console.log(`Total de jogos vendidos na semana: ${totalJogosVendidos}`);

console.log(`Dias com vendas acima de 15 jogos: ${diasBons}`);

console.log(`Faturamento total da loja: R$ ${(totalJogosVendidos * 250).toFixed(2)}`);
