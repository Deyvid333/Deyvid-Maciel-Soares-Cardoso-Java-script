let tempo = 9
let velocidade = 100
let consumo =  15
let distancia = (tempo * velocidade)
let consumoViagem = (distancia / consumo)
let precoviagem = (consumoViagem * 5.8)



console.log(` o consumo na viagem em litros de galosina é :  ${consumoViagem.toFixed(3)}   e o preço a ser gasto com a gasolina é de:  ${precoviagem.toFixed(3)}   `)
console.log(` a distancia a ser percorrida para a efetuação da chegada a seu destino é de :  ${distancia.toFixed(3)} ` )
