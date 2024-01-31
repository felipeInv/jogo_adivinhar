function verificar(){
var resultado = 369
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
    else{
        resposta.style.color = "red"
        resposta.innerHTML = "Mais"
    }
}
}