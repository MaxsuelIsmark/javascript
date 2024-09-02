let name = prompt("Qual o seu nome?")

let veloNave = 0

let velocidade = prompt("Qual velocidade gostaria de acelerar?")

let confimacao = confirm("Você esta indo à velocidade " + velocidade + "km/s")

if(velocidade) {
    veloNave == velocidade
}

if(velocidade <= 0) {
    alert("Nave está para. Considere partir e aumentar a velocidade")
} else if(velocidade < 40) {
        alert("Você esta devagar. Podemos aumentar mais")
} else if(velocidade < 80) {
        alert("Parece uma boa velocidade para manter")
} else if(velocidade < 100) {
        alert("Velocidade alta. Considere diminuir")
} else {
        alert("Velocidade perigosa. Controle automarico forçado")
            }