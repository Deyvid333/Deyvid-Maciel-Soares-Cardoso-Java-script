const cliente ={
    nome: document.querySelector("nome"),
    cpf: document.querySelector("cpf"),
    formulario: document.querySelector("form-cliente"),
}

const endereco = {
    cep: document.querySelector("cep"),
    cidade: document.querySelector("cidade"),
    uf: document.querySelector("uf"),
    numero: document.querySelector("numero"),
    bairro: document.querySelector("bairro"),
    complemento: document.querySelector("complemento"),
    logradouro: document.querySelector("logradouro"),
}

//adiciona um ouvinte para capiturar o disparo do evento de submit do formulario
cliente.formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault(); // impede o reloud automatico da pagina
    consultaCEP(cep.value);

console.log(cliente.nome.value, cliente.cpf.value)
});

let cep = "06170470";
//função que faz o buscar cep digitado
async function consultaCEP(cep){
const url = await fetch(`https://viacep.com.br/ws/${cep}/json`);
const resposta = await url.json();
//variavel do tipo obejeto para recebr os dados do usuario
const dadosDoCEP = {
logradouro: resposta.logradouro,
complemento: resposta.complemento,
bairro: resposta.bairro,
cidade: resposta.localidade,
estado: resposta.estado,
uf: resposta.uf,
regiao: resposta.regiao,
}
console.log(dadosDoCEP);
return dadosDoCEP;
}

consultaCEP(cep);