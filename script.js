//const formulario = document.querySelector("[data-form]");
//console.log(formulario);

const lista = document.querySelector("[data-list]");

const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);
}


// Evento = Ação
// addEventListener = Espera um evento, e o que vai acontecer
novaTarefa.addEventListener('click', criarTarefa);


// Criar uma nova tarefa





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
