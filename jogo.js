//declarando variaveis globais
var altura = 0
var largura = 0
var vidas = 1
var tempo = 25

//variavel que vai ser definida atraves da difuldade escolhida pelo usuario
var dificuldadeDoJogo = 1500 

//pegando o difuldade atraves do link enviado da pagina principal
var nivel = window.location.href
nivel = nivel.replace('?', '')

//definir o tempo conform cada dificuldade
if(nivel ==='normal'){
    dificuldadeDoJogo = 1500
    
}
if(nivel === 'dificl'){
    dificuldadeDoJogo = 1000

}
if(nivel ==='hardcore'){
    dificuldadeDoJogo = 500
    
}


//Criar a função para capturar as posições de largura e altura conforme a posição utal do body
function RedimensionamentoDeTela(){

    altura = window.innerHeight, 
    largura = window.innerWidth

}
RedimensionamentoDeTela()

var cronometro = setInterval(function (){
    tempo --

    if (tempo <0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
//criar a função TamanhosRandomicos

function TamanhosRandomicos(){
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'gameover.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas ++
        }

    }

    var x = Math.floor(Math.random() * largura) - 90
    var y = Math.floor(Math.random() * altura) -90

    //logica caso x e y for 0 fazer a posição receber ela mesmo para nao haver o decremento de -90
    x = x < 0 ? 0 : x
    y = y < 0 ? 0: y

    //criar um elemento img no caso mosquito dentro do documento body
    var  mosquito=  document.createElement(`img`)

    //elementos css na criação do elemento img
    mosquito.style.left = x + 'px'
    mosquito.style.top = y + 'px'
    mosquito.className = TamanhosAleatorio() + ' ' + ladoAlado()
    mosquito.style.position = 'absolute'
    mosquito.src = 'imagens/mosca.png'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    //adicionar o mosquito no body do html
    document.body.appendChild(mosquito)
}

//função para criar tamanhos diferentes conforme cada poisção diferente
function TamanhosAleatorio(){
    //variavel que recebe um valor de 0 até 3 para criar classes para cada valor
    var classe = Math.floor(Math.random() * 3)
    //switch para estrutura de decisao dos valores
    switch (classe){
        case 0:
            return 'mosquito1'
        case 1 :
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        default:
            break
    }
}
function ladoAlado (){
    //variavel que recebe um valor de 0 até 2 para criar classes para inverter ou nao a imgamem de forma randomica
    var inverter = Math.floor(Math.random() * 2)
    //switch para estrutura de decisao dos valores
    switch (inverter){
        case 0:
            return 'ladoA'
        case 1 :
            return 'ladoB'
        default:
            break
    }
}

