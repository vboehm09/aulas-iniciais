/*
Uma loja de roupas está fazendo uma promoção nas camisetas para o final de semana.
Eles têm os seguintes preços para as camisetas do estoque (em reais):

[25.99, 32.50, 45.00, 20.00, 55.90, 38.75, 15.25]

A gerente da loja quer destacar as camisetas mais baratas (abaixo de 30 reais)
em uma arara especial na entrada da loja para atrair os clientes.
Crie um programa que:
1. Mostre todos os preços em formato de tabela
2. Crie um novo array apenas com as camisetas que custam menos de 30 reais
3. Mostre quantas camisetas serão colocadas na arara especial (abaixo de 30 reais)
4. Calcule quanto um cliente economizaria se comprasse todas as camisetas da
   arara especial em vez das camisetas mais caras
*/

const precosCamisetas = [25.99, 32.50, 45.00, 20.00, 55.90, 38.75, 15.25];

console.table(precosCamisetas);

let novoArray = [];
let contadoraCamisetasBaratas = 0; 

let precoTotalCamisetasCaras = 0;
let precoTotalCamisetasBaratas = 0;

for (let i = 0; i < precosCamisetas.length; i++) {
    if (precosCamisetas[i] < 30) {
        novoArray[contadoraCamisetasBaratas] = precosCamisetas[i];
        contadoraCamisetasBaratas++;
        precoTotalCamisetasBaratas += precosCamisetas[i];
    } else {
        precoTotalCamisetasCaras += precosCamisetas[i]
    }
}

console.table(novoArray);

console.log(`Quantidade de camisetas na arara: ${novoArray.length}`);

console.log(`A economia foi de: R$ ${(precoTotalCamisetasCaras - precoTotalCamisetasBaratas).toFixed(2)}`);
