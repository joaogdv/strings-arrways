
// Definir um array com 5 comidas preferidas
var comidasPreferidas = ["Pizza", "Sushi", "Hambúrguer", "Lasanha", "Tacos"];

// a) Imprimir o array completo no console
console.log("a) Array completo:", comidasPreferidas);

// b) Imprimir a lista de comidas preferidas uma embaixo da outra
console.log("b) Essas são as minhas comidas preferidas:");
for (var i = 0; i < comidasPreferidas.length; i++) {
    console.log(comidasPreferidas[i]);
}

// c) Perguntar ao usuário uma comida preferida e trocar a segunda comida da lista
var comidaUsuario = prompt("Digite uma comida preferida:");
if (comidaUsuario) {
    comidasPreferidas[1] = comidaUsuario;
    console.log("c) Nova lista de comidas preferidas:", comidasPreferidas);
} else {
    console.log("Você não inseriu uma comida preferida. A lista permanece a mesma.");
}
