let botao = document.getElementById("botaoemail");
let icone = document.querySelector(".iconegame");


botao.addEventListener('click', ()=>{
    let input = $("#inputemail").val();

    try{
    if(input.indexOf('@') > -1){

        $("#mensagem").html("Verifique o seu email &#9989<br><br>");
        icone.style.display = "none";

    } else {
        icone.style.display = "none";
        throw ('Email inválido &#10060<br><br>');

    }}catch (error){
        $("#mensagem").html(`${error}`);
    }
});
