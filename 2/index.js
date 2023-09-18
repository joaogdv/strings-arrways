const frase = prompt("Escreva uma frase:");

// Transformar a frase em letras maiúsculas
const fraseMaiuscula = frase.toUpperCase();

// Substituir todas as ocorrências de "o" por "i" na língua do "i"
const fraseSubstituida = fraseMaiuscula.replace(/O/g, 'I');

// Calcular o tamanho da frase
const tamanhoFrase = frase.length;

console.log(`Frase alterada: ${fraseSubstituida}`);
console.log(`Tamanho da frase: ${tamanhoFrase}`);