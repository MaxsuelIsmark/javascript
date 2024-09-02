let entradaDataPartida = prompt("Digite a data de partida (formata DD/MM/YYYY)")

let dataPartida = moment(entradaDataPartida, "DD/MM/YYYY")


//Retorna a data de hoje automaticamente
let hoje = moment()   


//Diferença de datas
let diferencaData = hoje - dataPartida  

let escolhaOpcao = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(escolhaOpcao == "1") {
    let segundosPartida = Math.round(diferencaData / 1000)  //Se o usuario escolher a opção segundos essa condicção armazena os segundos e a biblioteca arredonda numeros quebrados
    alert("Tempo de vôo: " + segundosPartida + "segundos")
} else if(escolhaOpcao =="2") {
    let minutosPartida = Math.round(diferencaData / 1000 / 60)
    alert("Tempo de vôo: " + minutosPartida + "minutos")
} else if(escolhaOpcao == "3") {
    let horasPartida = Math.round(diferencaData / 1000 / 3600)
    alert("Tempo de vôo: " + horasPartida + "horas")
} else if(escolhaOpcao == "4") {
    let diasPartida = Math.round(diferencaData / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + diasPartida + "dias")
} else {
    alert("Opção inválida")
}
