// Array com cinco raças de cachorro
var racasDeCachorro = ["Labrador Retriever", "Bulldog", "Poodle", "Husky Siberiano", "Golden Retriever"];

// Solicitar ao usuário um número de 0 a 4
var numeroEscolhido = prompt("Digite um número de 0 a 4 para escolher uma raça de cachorro:");

// Converter o número escolhido para um número inteiro
numeroEscolhido = parseInt(numeroEscolhido);

// Verificar se o número escolhido está dentro do intervalo válido
if (numeroEscolhido >= 0 && numeroEscolhido <= 4) {
  // Acessar a raça correspondente ao número escolhido e imprimir no console
  alert("Raça escolhida: " + racasDeCachorro[numeroEscolhido]);
} else {
  alert("Número fora do intervalo válido.");
}