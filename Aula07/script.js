console.log("OK");

// Objeto que armazena os dados do cliente
const cliente = {
  nome: document.querySelector("#nome-cliente"),
  cpf: document.querySelector("#cpf"),
  formulario: document.querySelector("#form-cliente"),
};

// Objeto que armazena os dados do endereço
const endereco = {
  cep: document.querySelector("#cep"),
  logradouro: document.querySelector("#logradouro"),
  numero: document.querySelector("#numero"),
  complemento: document.querySelector("#complemento"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  uf: document.querySelector("#uf"),
};

// Adiciona um "ouvinte" para capturar o disparo do evento de submit do formulário
cliente.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  consultarCEP(cep.value);
});

// Função que faz a busca do CEP digitado
async function consultarCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  // Variável do tipo objeto para receber os dados do CEP do usuário
  const dadosDoCEP = {
    logradouro: resposta.logradouro,
    complemento: resposta.complemento,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    uf: resposta.uf,
  };
  console.log(dadosDoCEP);
  // return dadosDoCEP;
   inserirEndereco(dadosDoCEP);
}

// consultarCEP(cep);

function inserirEndereco(dadosDoCEP){
  endereco.logradouro.value = dadosDoCEP.logradouro
  endereco.bairro.value = dadosDoCEP.bairro
  endereco.cidade.value = dadosDoCEP.cidade
  endereco.uf.value = dadosDoCEP.uf
  endereco.complemento.value = dadosDoCEP.complemento
  endereco.numero.value = dadosDoCEP.numero
}

//objeto que armazena os dados do produto
const produto = {
   quantidade: document.querySelector("#quantidade"),
  produtoNome: document.querySelector("#produto"),
  preco: document.querySelector("#valor"),
  formulario: document.querySelector("#form-pedido"),
  lista: [],


  
}
//objeto para amazenar os dados da compra
const compra = {
  subTotal: 0,
  total: 0,
  itensComprados: 0,
}

produto.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
let item = {
  quantidade: Number(produto.quantidade.value),
  nome: produto.produtoNome.value,
  preco: Number(produto.preco.value),
  soma: produto.quantidade.value * produto.preco.value
}

listaProdutos(item);
});

//função para inserir qnt, nome e preço no obejeto "produto.lista"
function listaProdutos(item) {
  produto.lista.push(item);
  console.log(produto.lista);
 

}

function somarProdutos(listaDeProdutos){
 listaDeProdutos.forEach(produto => {

  compra.subTotal += Number(produto.quantidade * produto.preco)
  compra.itensComprados += Number(produto.quantidade)
  console.log( typeof compra.itensComprados)
   console.log( typeof compra.subTotal)

  
 });
}

const btnProduto = document.querySelector("#btn-produto");
console.log(btnProduto);
btnProduto.addEventListener('click', (evento) =>{
  somarProdutos(produto.lista);
  console.log(compra.subTotal)
  console.log(compra.itensComprados)
});

const notaFiscal = document.querySelector('#relacao-itens')

const qtdItem = document.createElement("p");
qtdItem.className = "qtd-Item";

qtdItem.innerText ="215x";

notaFiscal.appendChild(qtdItem);





