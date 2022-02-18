//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores

function DIVISAO(div, dev){
    let resto = 0
    console.log(`${div} / ${dev} = ` ,div/ dev);
    resto = div % dev
    console.log('Resto: ', resto)
}

DIVISAO(17,4)
DIVISAO(50000,2)