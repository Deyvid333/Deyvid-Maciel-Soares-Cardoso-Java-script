//console.log("ok")
const enderecoUsuario = {
       rua: document.querySelector('#rua'),
    bairro: document.querySelector('#bairro'),
    cidade: document.querySelector('#cidade'),
    estado: document.querySelector('#estado'),
    uf: document.querySelector('#uf'),
    regiao: document.querySelector('#regiao'),
    cep: "06401134",
};

console.log(rua)





async function consultaCEP(cep){
const url = await fetch(`https://viacep.com.br/ws/${cep}/json`);


const resposta = await url.json();
//variavel do tipo obejeto para recebr os dados do usuario
const dadosDoCEP = {
rua: resposta.logradouro,
bairro: resposta.bairro,
cidade: resposta.localidade,
estado: resposta.estado,
uf: resposta.uf,
regiao: resposta.regiao,
}

enderecoUsuario.rua.innerText = dadosDoCEP.rua;
enderecoUsuario.bairro.innerText = dadosDoCEP.bairro;
enderecoUsuario.cidade.innerText = dadosDoCEP.cidade;
enderecoUsuario.estado.innerText = dadosDoCEP.estado;
enderecoUsuario.uf.innerText = dadosDoCEP.uf;
enderecoUsuario.regiao.innerText =dadosDoCEP.regiao

console.log(dadosDoCEP)
//return resposta

}


consultaCEP(enderecoUsuario.cep);

const obejetoTeste ={
    nome: "1"
}
console.log(typeof obejetoTeste)
