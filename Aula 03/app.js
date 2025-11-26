//let cliente = "f33mboyDaLuxuria"
//const vendedora = "joana"

//console.log(` o cliente é ${cliente} e o vendedor é ${vendedora}`)

//cliente = "jose"

//vendedora = "maria"

//console.log

//const venda = {
 //   cliente: "joao",
  //  vendedora: "joana"
//}

//venda.cliente = "jose"

//venda.valor = 1000

//venda.produto = "computador do BEM 10 PLUS pro MAX"

//console.log(venda.produto.toUpperCase())
//console.log(venda.valor.toUpperCase('pt-br', {style: 'currency', currency: 'BR'}))

const paciente = {
    peso : 300,
    altura :  1.50,
    nome : " rogerio do mal ",
    imc : "",
    genero : " Macha ",
    sobrenome : " Alpha ",
    endereço: " carapcuiba, sardinha 408 ",

};

imc = paciente.peso / paciente.altura **2;


if(imc <= 18.5){
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta abaixo do peso ideal, o seu imc é: " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 ")
}else if( imc >= 18.6 && imc < 24.9){
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta com o peso ideal, parabens!!! " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9  ")
}else if( imc >= 24.9 && imc < 29.9){
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta com exesso de peso" + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de sobre peso é: 25 - 29.9 ")
}else if( imc >= 29.9 && imc < 34.9){
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta com obecidade tipo 1 " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 1 é: 30 - 34.9 ")
}else if( imc >= 34.9 && imc <= 39.9){
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta com obecidade tipo 2 " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obcidade tipo 2 é : 35 - 39.9 ")
}else{
    console.log(paciente.nome + paciente.sobrenome + " do genero: " + paciente.genero + " voce esta realmente obeso! voce atingiu a obecidade tipo 3,o seu imc é: " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 3 é 40 para mais ")
}



// const titulo = document.querySelector("h1")
// console.log(titulo)

// titulo.innerText = "curso de desenvolvimento javaScript"

// const novoparagrafo = document.createElement("h2")

// novoparagrafo.innerText = "novo paragrafo criado no javaScript"

// const body = document.querySelector("body")

// body.append(novoparagrafo)

// novoparagrafo.style.color = "violet"
// titulo.style.color = "blue"

const nome = document.querySelector('#nome')
console.log(nome)

const sobrenome = document.querySelector('#sobrenome')
console.log(sobrenome)

const altura = document.querySelector('#altura')
console.log(altura)

const peso = document.querySelector('#peso')
console.log(peso)

const genero = document.querySelector('#genero')
console.log(genero)

const endereco = document.querySelector('#endereco')
console.log(endereco)