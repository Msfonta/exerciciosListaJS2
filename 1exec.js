// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calculos (a, b){
    let soma = a + b
    let subtracao = a - b
    let divisao = a / b
    let multi = a * b
    console.log('soma: ',soma)
    console.log('subtracao: ',subtracao)
    console.log('divisao: ',divisao)
    console.log('multiplicacao: ', multi)
}

calculos(500, 25)