let pessoaVelha = prompt("Digite o nome da pessoa mais velha")
let idadeVelha = prompt("Digite a idade da pessoa mais velha")

let pessoaNova = prompt("Digite o nome da pessoa mais nova")
let idadeNova = prompt("Digite a idade da pessoa mais nova")

let diferenca = idadeVelha - idadeNova

alert(
    "Pessoa mais velha: " +  pessoaVelha + "\nIdade: " + idadeVelha + // \n pula uma linha \n\n pula duas linhas
    "\n\nPessoa mais nova: " + pessoaNova + "\nIdade: " + idadeNova +
    "\n\nDiferença de idade: " + diferenca
)