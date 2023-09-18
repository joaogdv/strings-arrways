
var numeros = [1, 2, 3, 4, 5, 6];

var tamanhoOriginal = numeros.length;

numeros.push(7);

numeros.splice(3, 2);

var novoTamanho = numeros.length;

// Imprimir os resultados no console
console.log("Array original: " + numeros);
console.log("Tamanho original: " + tamanhoOriginal);
console.log("Array após adicionar 7 e remover 4 e 5: " + numeros);
console.log("Novo tamanho do array: " + novoTamanho)

