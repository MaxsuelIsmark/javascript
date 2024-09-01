let velocidade = 20

if(velocidade < 40) {   //avalia se a expressão retorna verdadeiro
    console.log("Velocidade baixa")  //executa caso a condição esteja verdadeira
} else {                                            //executado quando a expressão lógica nao atende ao if r não pode existir sem o if 
   if(velocidade <= 100) {
        console.log("Cuidado! Próximo a velocidade de risco")
    } else {
        console.log("Velocidade de risco!")
    }
}

// o código abaixo é semelhante ao de cima, porém mais enxuto

let rapidez = 50

if(rapidez < 50) {
    console.log("Velocidade baixa")
} else if(rapidez <=100) {
    console.log("Cuidado! Próximo a velocidade de risco")
} else {
    console.log("Velocidade de risco")
}



//Verifica se a expressão, caso seja verdadeira executa o primeiro bloco, caso seja falso, executa o segundo Operador Ternário ou if de uma linha. So é recomendado usar quando for uma coisa pequeno
(velocidade > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")