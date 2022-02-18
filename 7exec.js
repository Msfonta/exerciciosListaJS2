// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

//bhaskara sem funcao
let valorA = 1
let valorB = 4
let valorC = -12
let x1 = (((valorB) + Math.sqrt((valorB * valorB) - (4*valorA*valorC)))/2*valorA)
let x2 = (((valorB) - Math.sqrt((valorB * valorB) - (4*valorA*valorC)))/2*valorA)
const bhask = [x1, x2]
console.log(bhask)

//bhaskara com funcao
function bhaskara(a, b, c){
    let x1 = (b + (Math.sqrt(16 - (4*(-12)))))/2
    let x2 = (b - (Math.sqrt(16 - (4*(-12)))))/2
    const vet = [x1, x2]
    console.log(vet)
}

bhaskara(1,4,-12)
