//Exercício 3 - Lista de Compras
/*
Crie um programa que simule uma lista de compras.
1. Crie um array vazio chamado "listaDeCompras"
2. Adicione 5 itens diferentes à lista
3. Remova o primeiro item (definindo-o como undefined)
4. Substitua o item undefined por um novo item
5. Exiba a lista final
*/

let listaDeCompras = [];
listaDeCompras = ["Maçã", "Tomate", "Café", "Chocolate", "Banana"]

listaDeCompras [0] = undefined
console.log(listaDeCompras);

listaDeCompras [0] = "Shampoo"

console.log(listaDeCompras);
console.log(`------------------------------`);
/*
Exercício 2 - Encontrando o Maior Valor
Um influenciador de games quer saber qual de seus vídeos tem mais views.
Crie um array com a quantidade de visualizações de 6 vídeos diferentes
e encontre qual é o maior número de views.
*/

let views = [1200, 3400, 5600, 8900, 2300, 4500];
views [1] = 9000

let maiorViews = views[0];

console.table(views);

for (let i = 1; i < views.length; i++) {
    if (views[i] > maiorViews) {
        maiorViews = views[i];
    }
}

console.log(`O maior número de views é: ${maiorViews}`);
console.log(`------------------------------`);

/* 
Exercício 1 - Média de notas
Você está desenvolvendo um sistema para uma escola que precisa calcular a média
das notas de uma turma. Crie um array com 5 notas e calcule a média.
*/

let notas = [9, 7, 6, 10, 8];
let total = 0

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    total = + notas[i]
}
console.table(notas);
console.log(`A média das notas é: ${total}`);

