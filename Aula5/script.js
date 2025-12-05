const input = {
  combustivel: document.querySelectorAll(".combustivel"),
  consumo_medio: document.querySelector("#consumo"),
  velocidade_media: document.querySelector("#velocidade"),
  preco_combustivel: document.querySelector("#precoCombustivel"),
  horas_viagem: document.querySelector("#horas"),
};

const elemento = {
  form: document.querySelector("form"),
  resultado: document.querySelector("#resultado"),
};

let combustivelSelecionado;

elemento.form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularDistancia(
    input.velocidade_media,
    input.horas_viagem,
    input.consumo_medio.value,
    combustivelSelecionado
  );
});

function calcularDistancia(velocidade, horas, consumo, tipoCombustivel) {
  let velocidadeDigitada = Number(velocidade.value),
    hora = Number(horas.value.slice(0, 2)),
    minuto = Number(horas.value.slice(3));

  let horasTotais = (hora * 60 + minuto) / 60;
  let distancia = velocidadeDigitada * horasTotais;

  calcularConsumo(input.consumo_medio.value, distancia, tipoCombustivel);
}

function calcularConsumo(consumoMedio, distanciaPercorrida, tipoCombustivel) {
  let consumoEmLitros = distanciaPercorrida / consumoMedio;
  let valorAPagar

  if (tipoCombustivel == "etanol") {
    consumoEmLitros += (consumoEmLitros * 0.3);
    valorAPagar = consumoEmLitros * input.preco_combustivel.value
   inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  } else if (tipoCombustivel == "diesel") {
    consumoEmLitros = (consumoEmLitros * 0.85);
    valorAPagar = consumoEmLitros * input.preco_combustivel.value
   inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  } else {
    valorAPagar = consumoEmLitros * input.preco_combustivel.value
inserirDados(distanciaPercorrida, consumoEmLitros, tipoCombustivel, valorAPagar)
  }

  console.log(consumoEmLitros + " litros");
}

input.combustivel.forEach((tipoCombustivel) => {
  tipoCombustivel.addEventListener("change", (evento) => {
    combustivelSelecionado = evento.target.id;
    console.log(combustivelSelecionado);
    return combustivelSelecionado;
  });
});


function inserirDados(distanciaPercorrida, consumo, tipoCombustivel, valorAPagar){
 
  // let distanciaFormatada = Number(distanciaPercorrida).toFixed(1).replace(",", ",")
  // let consumoFormatado = Number(distanciaPercorrida).toFixed(1).replace(",", ",")
      let consumoFormatado = distanciaPercorrida.toLocaleString("pt-BR")
      let distanciaFormatada = consumo.toLocaleString("pt-BR")
  
 
  elemento.resultado.innerText = `para uma viagem de ${distanciaFormatada} km, voce gastará ${consumoFormatado} litros de ${tipoCombustivel},
   com valor total de ${valorAPagar.toLocaleString('pt-BR',{style: 'currency', currency: "BRL",})}`


  elemento.resultado.id = '';
}
