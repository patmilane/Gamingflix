const cep = document.getElementById("cep")
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
cep.addEventListener("blur",(e)=>{
    let search=cep.value.replace(".","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache:'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`,options)
    .then(response=>{response.json()
        .then(data => showData(data))
        (document.getElementById("msgCEP").innerHTML="<font color='green'>CEP válido</font>")
    })
    .catch(document.getElementById("msgCEP").innerHTML="<font color='red'>CEP Inválido</font>")  
})
function validaNome() {
    var nome= document.getElementById("noome")
    if(nome.value== ""){
        document.getElementById("msgNome").innerHTML="<font color='red'>Insira seu Nome/Sobrenome.</font>"
    }else{
    document.getElementById("msgNome").innerHTML="<font color='green'>Validado.</font>"};
};
function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgEmail").innerHTML="<font color='green'>E-mail válido</font>";
    }else{
    document.getElementById("msgEmail").innerHTML="<font color='red'>Email inválido </font>";
    }
};

function validaSenha1() {
    var nome= document.getElementById("senha1")
    if(nome.value== ""){
        document.getElementById("msgSenha1").innerHTML="<font color='red'>Insira uma senha</font>"
    }else{
    document.getElementById("msgSenha1").innerHTML="<font color='green'>Validado.</font>"};
};

function comparaSenha(senha1, senha2){
    var s1 = document.getElementById("senha1").value;
    var s2 = document.getElementById("senha2").value;
		
    if (s1 != "" && s2 != "" && s1 === s2){
        document.getElementById("msgSenha3").innerHTML="<font color='green'>Confirmação feita.</font>"
    }else{
        document.getElementById("msgSenha3").innerHTML="<font color='red'>Senhas diferentes.</font>"
    }
}
