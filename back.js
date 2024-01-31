var resultado = parseInt(Math.random()*1001);
function verificar(){
var numero = window.document.getElementById('num')
var resposta = window.document.getElementById('resposta')
if(numero.value.length > 0){
    numero = Number(numero.value)
    if(numero == resultado){
        resposta.style.color = "green"
       resposta.innerHTML = "Acertou!"
    }
    else if(numero > resultado){
        resposta.style.color = "red"
        resposta.innerHTML = "Menos"
    }
    else if(numero < resultado){
        resposta.style.color = "red"
        resposta.innerHTML = "Mais"
    }
}
}