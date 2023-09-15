// a) Criar um array vazio e armazená-lo na variável listaDeTarefas
var listaDeTarefas = [];

// b) Pedir ao usuário 3 tarefas e armazená-las no array
for (var i = 0; i < 3; i++) {
    var tarefa = prompt("Digite a tarefa #" + (i + 1) + " que você precisa realizar hoje:");
    listaDeTarefas.push(tarefa);
}

// c) Imprimir o array no console
console.log("Tarefas a serem realizadas:");
console.log(listaDeTarefas);

// d) Pedir ao usuário que digite o índice de uma tarefa realizada
var indiceRealizada = parseInt(prompt("Digite o índice de uma tarefa que você já realizou (0, 1 ou 2):"));

// e) Remover a tarefa com base no índice fornecido pelo usuário
if (indiceRealizada >= 0 && indiceRealizada < listaDeTarefas.length) {
    listaDeTarefas.splice(indiceRealizada, 1);
    console.log("Tarefa removida.");
} else {
    console.log("Índice inválido. Nenhuma tarefa foi removida.");
}

// f) Imprimir o array atualizado no console
console.log("Tarefas restantes:");
console.log(listaDeTarefas);