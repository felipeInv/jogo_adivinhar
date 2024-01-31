function verificar(){
var resultado = 369
var numero = window.document.getElementById('num')
var resposta = window.document.getElementById('resposta')
if(numero.value.length > 0){
    numero = Number(numero.value)
    if(numero == resultado){
       resposta.innerHTML = "Acertou!"
    }
    else if(numero > resultado){
        resposta.innerHTML = "Menos"
    }
    else(numero < resultado){
        resposta.innerHTML = "Mais"
    }
}
}