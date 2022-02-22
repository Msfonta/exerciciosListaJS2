// funcao que recebe callback dentro do callback uma soma 2 numeros
// retornar true ou false > 5


function determinaValor(a, b, callback){
    var teste = callback(a,b)
    console.log(teste)
}


determinaValor(2,2, function(a,b){
    if(a + b > 5){
        return true
    }else{
        return false
    }
})

determinaValor(2,2)


const imc = function(altura, peso, calculo){
    let resultado = calculo(altura, peso)
    if(resultado > 20){
        console.log('no peso')
    }else{
         console.log('abaixo do peso')
    }
}
imc(197,86, function(altura,peso){
    return peso / Math.pow(altura,2)
})