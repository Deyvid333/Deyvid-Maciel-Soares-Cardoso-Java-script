let peso = 58
let altura = 1.73
let nome = "jeferson caminhoes"
let imc = peso / (altura **2)


if(imc <= 18.5){
    console.log(nome + " voce esta abaixo do peso ideal, o seu imc é: " + imc + " o imc ideal é: 18.6 - 24.9 ")
}else if( imc >= 18.6 && imc <= 24.9){
    console.log(nome + " voce esta com o peso ideal, parabens!!! " + imc)
}else{
    console.log(nome + " voce esta obeso,o seu imc é: " + imc + " o imc ideal é: 18.6 - 24.9 ")
}
