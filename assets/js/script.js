/*Variável de Escopo LOCAL - só é acessado ONDE FOI CRIADO - Atualização do EcmaScript
Cria variável nome sem tipo, recebendo 'window.document.getElementById' (método, precisa de parênteses, 'nome')

Acesso por TAG: getElementByTagName()
Acesso por ID: getElementById()
Acesso por NOME: getElementByName()
Acesso por CLASSE: getElementByClassName()
Acesso por SELETOR: querySelector()
*/

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

/*
Pode chamar window.document OU document, tanto faz;
Seletor por Id = Hashtag; Seletor por Class = Ponto;
Formas completas: input#email por Id OU input.email por Class.
BOAS PRÁTICAS: variáveis criadas com letras, não números, e com nomes ÓBVIOS
*/

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto Muito Grande; Digite Até 100 Caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk ==true) {
        alert('Formulário Enviado Com Sucesso!!!')
    } else {
        alert('Atenção! Verifique O Preenchimento E Tente Novamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
/*

innerHTML = 'Texto Dentro Dos 100 Caracteres!'
txtAssunto.style.color = 'green'

validaNome pode ser qualquer nome já que não é reservada!
onkeyup EVENTO para quando soltar a tecla que foi pressionada!

validaEmail por presença da arroba e do ponto.

validaAssunto pode chamar <h1> p.ex.
style pode chamar qualquer coisa p.ex. backgroundColor

var = Variável de Escopo GLOBAL - poderá ser acessado por TODO O CÓDIGO
const = Variável de Escopo GLOBAL, mas que não muda de valor - POUCO USADA
*/