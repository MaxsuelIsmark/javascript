alert("Bem-vindo! A seguir pediremos que informe alguns dados")

let name = prompt("Qual seu nome?: ")  //caixa para inserir dados

let idade = prompt("Sua idade: ")

let confirmacao = confirm("Sua idade é " + idade + " idade") //caixa de confirmação true/false

alert("Nome: " + name)
alert("Idade: " + idade)
alert("Idade confirmada: " + confirmacao)