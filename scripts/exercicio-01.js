/*Você está desenvolvendo um aplicativo de previsão do tempo para o seu bairro.
Durante a última semana, você anotou as temperaturas máximas registradas:

[28, 31, 27, 29, 30, 32, 33] // Domingo a Sábado

Sua mãe está planejando um piquenique e pediu para você analisar como estava o tempo.

Desenvolva um programa que:
1. Calcule a temperatura média da semana
2. Informe a temperatura máxima e em qual dia ela ocorreu
3. Informe a temperatura mínima e em qual dia ela ocorreu
*/

const temperaturas = [28, 31, 27, 29, 30, 32, 33];
const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let temperaturaTotal = 0; 
let temperaturaMedia = 0;
let temperaturaMaxima = temperaturas[0];
let diaMaiorTemperatura = "";
let temperaturaMinima = temperaturas[0];
let diaMenorTemperatura = "";

for (let i = 0; i < temperaturas.length; i++) {
    temperaturaTotal += temperaturas[i];

    if (temperaturas[i] > temperaturaMaxima) {
        temperaturaMaxima = temperaturas[i];
        diaMaiorTemperatura = diasDaSemana[i];
    }

    if (temperaturas[i] < temperaturaMinima) {
        temperaturaMinima = temperaturas[i];
        diaMenorTemperatura = diasDaSemana[i];
    }
}

temperaturaMedia = temperaturaTotal / temperaturas.length

console.log(`A temperatura média da semana foi de: ${temperaturaMedia}°C`);

console.log(`A maior temperatura foi de: ${temperaturaMaxima}°C e aconteceu no ${diaMaiorTemperatura}`);

console.log(`A menor temperatura foi de: ${temperaturaMinima}°C e aconteceu na ${diaMenorTemperatura}`);