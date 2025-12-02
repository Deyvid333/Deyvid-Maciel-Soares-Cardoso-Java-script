let tempo = 9
let velocidade = 100
let consumo =  15
let precoGasolina = 5.899
let precoEtanol = 3.9888
let precoDizel = 6.05
let distancia = (tempo * velocidade)
let consumoViagem = (distancia / consumo)
let precoViagemGasolina = (consumoViagem * precoGasolina)
let precoViagemEtanol = (consumoViagem * precoEtanol)
let precoViagemDizel = (consumoViagem * precoDizel)


//AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
let tipoCombustivel = 0 // se for 0 = Etanol. se for 1 = Gasolina. se for 2 = Diesel. ESCOLHA O TIPO DE GASOLINA !!!!!!!!!!!!!! AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII !!!!!!
//AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIII


console.log(` o consumo na viagem em litros de galosina é : ${consumoViagem.toFixed(1).toLocaleString('pt-br')} litro`)
console.log(` a distancia a ser percorrida para a efetuação da chegada a seu destino é de : ${distancia}KM ` )

if(tipoCombustivel == 0){
    console.log(`voce escolheu abastecer com Etanol!!! o custo para abastecer com Etanol é de:  ${precoViagemEtanol.toLocaleString('pt-br',{style: 'currency', currency: 'BRL' } ) }`)
}else if (tipoCombustivel == 1){
    console.log(`voce escolheu abastecer com Gasolina!!! o custo para abastecer com Gasolina é de:  ${precoViagemGasolina.toLocaleString('pt-br',{style: 'currency', currency: 'BRL' } ) }`)
}else if (tipoCombustivel == 2){
    console.log(`voce escolheu abastecer com Dizel!!! o custo para abastecer com Dizel é de:  ${precoViagemDizel.toLocaleString('pt-br',{style: 'currency', currency: 'BRL' } ) }`)
}else{
    console.log(`escolha um combustivel / Número valido, 0 = etanol, 1 = gasolina e 2 = Diesel `)
}
