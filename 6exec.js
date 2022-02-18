// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos
let juros = 0

function jurosSimples(capital, taxa, tempo){
    juros = capital * taxa * tempo
    let montante = capital + juros
    console.log('R$:',montante)
}

function jurosComposto(capital, taxa, tempo){
    let montante = capital*Math.pow((1+taxa),tempo)
    console.log(montante.toFixed(2))

}

//jurosSimples(2000, 0.03, 12)

jurosComposto(8000, 0.012, 6)