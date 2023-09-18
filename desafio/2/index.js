const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const palavraAlvo = "Abacaxi";

const indice = frutas.indexOf(palavraAlvo);
const tamanhoArray = frutas.length;

if (indice !== -1) {
  console.log(`O índice de '${palavraAlvo}' é ${indice}.`);
  console.log(`O tamanho do array é ${tamanhoArray}.`);
} else {
  console.log(`'${palavraAlvo}' não está no array.`);
}