//const formulario = document.querySelector("[data-form]");
//console.log(formulario);



const criarTarefa = (evento) => {
    evento.preventDefault();
    
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    //console.log(valor);
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class = "content">${valor}<p/>`; 
    
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);



    input.value = "";
    // limpa o valor do input na tela, após o uso para cadastro
}

// Preciso pegar a const conteudo, inserir ela dentro de uma tag li e inserir essa tag li
// na ul.




const novaTarefa = document.querySelector("[data-form-button]");

// Evento = Ação
// addEventListener = Espera um evento, e o que vai acontecer
novaTarefa.addEventListener('click', criarTarefa);  // Criar uma nova tarefa

//Componente
const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
};


const concluirTarefa = (evento) => {
    const eventoAcionado = evento.target 

    const tarefaCompleta = eventoAcionado.parentElement

    tarefaCompleta.classList.toggle('done'); 
};





//      Eventos 
// Qual o tipo do evento - click
// O que vai acontecer - nova tarefa
// Onde irá ocorrer o evento - button




//function somarDoisValores(num1, num2) {
    //let soma = num1 + num2;
    //console.log(soma);
//}



//const diminuirDoisValores = (num1, num2) => {
    //let diminuir = num1 - num2;
    //return diminuir;
//}

//const diminuirDoisValores = (num1, num2) =>  num1 - num2;
