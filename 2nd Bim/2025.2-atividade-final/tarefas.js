let dados = [
    {
      titulo: "Estudar para prova de Matemática Discreta",
      concluido: true,
      data_inicio: "20/01/2026",
      data_conclusao: "06/02/2026"
    },
    {
        titulo: "Atividade de Web Design",
        concluido: false,
        data_inicio: "03/02/2026",
        data_conclusao: ""
    },
    {
        titulo: "Criar aplicação em Java",
        concluido: false,
        data_inicio: "03/02/2026",
        data_conclusao: ""
    },
];

function createNewTask() {
    let inputText = document.getElementById("input-tarefa");
    let novoTitulo = inputText.value
    let dataObj = new Date();
    let data = dataObj.toLocaleDateString() //add date function

    let newTask = {
        titulo: novoTitulo,
        concluido: false,
        data_inicio: data,
        data_conclusao: ""
    }

    localStorage.setItem('myTasks', newTask)
    renderTasks()
}

function converterParaHTML(task) {
    return `<tr>
        <td>${task.titulo}</td>
        <td>
            <p>${task.data_inicio}</p>
            <input type="checkbox" ${task.concluido ? "checked": ""}></input>
        </td>
    </tr>`;
}

function renderTasks() {
    let htmlTasks = document.getElementById("tarefas-lista");
    htmlTasks.innerHTML = "";
    
    let html = dados.map(task => converterParaHTML(task));
    let htmlTexto = html.join("");

    htmlTasks.innerHTML = htmlTexto;
}

renderTasks();