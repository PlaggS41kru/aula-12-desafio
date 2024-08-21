// 1. Cria uma lista vazia para armazenar as tarefas.
const tarefas = [];

// 2. Função para exibir a lista de tarefas na página.
function exibirLista(){
    const taskListElement= document.getElementById("taskList");
    taskListElement.innerHTML = "";

    for(let indice = 0; indice < tarefas.length; indice++){
        taskListElement.innerHTML+= `
        <li>
            ${indice+1}. ${tarefas[indice]}
            <button onclick="deletar(${indice})">Deletar</button>
        </li>
        `
    }
}

// 3. Função para adicionar uma nova tarefa à lista.
function adicionarTarefa(lista, novaTarefa){
    if (novaTarefa) {
        lista.push(novaTarefa);
        exibirLista();
        document.getElementById("taskInput").value = "";
    }
}

// 4. Adiciona um evento ao botão de adicionar tarefa quando ele é clicado.
document.getElementById("addTaskButton"),addEventListener("click", () => {
    const taskInput = document.getElementById('taskInput');
    const tarefa = taskInput.value;
    adicionarTarefa(tarefas, tarefa);
})

//5. Função de deletar tarefa

function deletar(id) {
    tarefas.splice(id, 1);
    exibirLista();
}


