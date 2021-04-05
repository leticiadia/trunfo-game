var cartaMark = {
    nome: 'Mark Watney',
    imagem: 'http://s2.glbimg.com/r6Wqp8fEodQIY6gh_OyqDx6FIgU=/e.glbimg.com/og/ed/f/original/2015/10/01/matt2.jpg',
    atributos:{
        Agilidade: 88,
        Fraqueza: 65,
        Habilidade: 80
    }   
}

var cartaMelissa = {
    nome: 'Melissa Lewis',
    imagem: 'https://i.pinimg.com/564x/a6/f3/11/a6f311172659754ee26815db40fc4acf.jpg',
    atributos:{
        Agilidade: 78,
        Fraqueza: 40,
        Habilidade: 72
    }   
}

var cartaBeth = {
    nome: 'Beth Johanssen', 
    imagem: 'https://i.pinimg.com/originals/f1/46/96/f1469650ec40cb700dcb992052995967.jpg',
    atributos:{
        Agilidade: 63,
        Fraqueza: 25,
        Habilidade: 70
    }   
}

var cartaBeck = {
    nome: 'Dr.Chris Beck',
    imagem: 'https://i.pinimg.com/originals/33/78/2b/33782bffcf9864d6a8a860925ddbb122.jpg',
    atributos:{
        Agilidade: 60,
        Fraqueza: 25,
        Habilidade: 68
    }
}

var cartaVincent = {
    nome: 'Vincent Kapoor',
    imagem: 'https://4.bp.blogspot.com/-PbxxJxzTy-Q/VyK8U4r02gI/AAAAAAAAGRo/zZknniHrdWQaNtnObaIOEgZ9ABgc3VAIgCKgB/s1600/033838.jpg-r_640_600-b_1_D6D6D6-f_jpg-q_x-xxyxx.jpg',
    atributos:{
        Agilidade: 52,
        Fraqueza: 35,
        Habilidade: 65
    }
}

var cartaRover = {
    nome: 'Rover',
    imagem: 'https://atitudereflexiva.files.wordpress.com/2016/09/martian2.jpg',
    atributos:{
        Agilidade: 100,
        Fraqueza: 100,
        Habilidade: 100
    }
}

var cartaRich = {
    nome: 'Rich Purnell',
    imagem: 'http://br.web.img3.acsta.net/r_1280_720/pictures/15/08/27/13/16/032900.jpg',
    atributos:{
        Agilidade: 89,
        Fraqueza: 35,
        Habilidade: 92
    }   
}

var cartaMartinez = {
    nome: 'Rick Martinez',
    imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2015/09/perdidoemmarteastronautas3.jpg',
    atributos:{
        Agilidade: 70,
        Fraqueza: 82,
        Habilidade: 70
    }   
}

var cartaMaquina
var cartaJogador

var cartas = [cartaMark, cartaMelissa, cartaBeth, cartaBeck, cartaVincent, cartaRover, cartaRich, cartaMartinez]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()


function atualizaQuantidadeDeCartas(){
    var divQuanntidadeCartas = document.getElementById('quantidade-cartas')

    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuanntidadeCartas.innerHTML = html
}

function atualizaPlacar(){ 
    var divPlacar = document.getElementById('placar')

    var html = 'Jogador ' + pontosJogador + " / " + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)


    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){

    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado">Você venceu a partida!</p>'
        pontosJogador++
    }
    else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado">Você perdeu a partida!</p>'
        pontosMaquina++
    }else{
        htmlResultado = '<p class="resultado">Empatou</p>'
    }
   
    if(cartas.length == 0){
        alert('fim de jogo')
        if(pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado">Você venceu a partida!</p>'
        }else if(pontosMaquina > pontosJogador){
            htmlResultado = '<p class="resultado">Você perdeu a partida!</p>'
        }else{
            htmlResultado = '<p class="resultado">Empatou</p>'
        }
    }else{
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true
   


    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`

    var opcoesTexto = ""

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true


    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}