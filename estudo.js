const soma = function(x ,y){
    return x + y
}

const imprimeResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimeResultado(3,4)
imprimeResultado(3,4, soma)
imprimeResultado(3,4, function(x,y){
    return x-y
})
imprimeResultado(3,4, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('Estou falando...')
    }
}

pessoa.falar()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.pop()//vai tirar o 10 por ser o ultimo valor do array
numeros.push(11) //vai adicionar o 11 no final do array
numeros.shift()// vai tirar o 1  por ser o primeiro valor do array
numeros.unshift(12)//vai colocar o 12 na primeira posicao
numeros.splice(3, 2) //vai retirar o 3 elemento (3) e o (4) tambem por colocar o valor para retirar 2 elementos
numeros.splice(4,0,15,16) // vai adicionar o valor 15 e 16 a partir do elemento 4 entao  a ordem vai ser 12 2 3  6 15 16 7 8 9 11

const outrosNumero = numeros.splice(0, 5, 100, 111, 122, 133)

console.log(numeros, outrosNumero)