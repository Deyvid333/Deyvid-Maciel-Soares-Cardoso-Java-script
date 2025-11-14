let peso = 110
let altura = 1.65
let nome = "rogerio do mal"
let imc = peso / (altura **2)


if(imc <= 18.5){
    console.log(nome + " voce esta abaixo do peso ideal, o seu imc é: " + imc + " o imc ideal é: 18.6 - 24.9 ")
}else if( imc >= 18.6 && imc <= 24.9){
    console.log(nome + " voce esta com o peso ideal, parabens!!! " + imc + " o imc ideal é: 18.6 - 24.9  ")
}else if( imc >= 25 && imc <= 29.9){
    console.log(nome + " voce esta com exesso de peso" + imc + " o imc ideal é: 18.6 - 24.9 e o imc de sobre peso é: 25 - 29.9 ")
}else if( imc >= 30 && imc <= 34.9){
    console.log(nome + " voce esta com obecidade tipo 1 " + imc + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 1 é: 30 - 34.9 ")
}else if( imc >= 35 && imc <= 39.9){
    console.log(nome + " voce esta com obecidade tipo 2 " + imc + " o imc ideal é: 18.6 - 24.9 e o imc de obcidade tipo 2 é : 35 - 39.9 ")
}else{
    console.log(nome + " voce esta realmente obeso! voce atingiu a obecidade tipo 3,o seu imc é: " + imc + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 3 é 40 para mais ")
}
