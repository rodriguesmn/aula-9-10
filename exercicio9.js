let listaDeTarefas = []
listaDeTarefas.push(prompt ("Cite a primeira tarefa que você executa em seu dia. "))
listaDeTarefas.push(prompt ("Cite a segunda tarefa que você executa em seu dia. "))
listaDeTarefas.push(prompt ("Cite a terceira tarefa que você executa em seu dia. "))

console.log (listaDeTarefas)

listaDeTarefas.splice((prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")),1)
console.log (listaDeTarefas)