const caixa = document.getElementById("msg");
const span = document.getElementsByTagName("span");
const mensagem = document.querySelector("#msg h3");

function mostrar(){
    caixa.style.display = caixa.style.display === "block"
        ? "none"
        : "block";
}

span[0].addEventListener(
    "click",
    function(){

        alert("Não há novas mensagens disponíveis.");
    }
);

mensagem.addEventListener(
    "click",
    function(){
        alert("Postado no dia: 08/04/2026");

    }
);