// nomes = ['Marco', 'Luiz', 'Alberto']
// valores = [2, 4, 6, 8, 10]

// //forEach
// const retornoMap = nomes.forEach((nome) =>
// {
//     return nome.toUpperCase();
// })



// //map
// const retornoMap2 = valores.map((valor) =>
// {
//     return valor * valor
// })

// console.log(retornoMap2)
// console.log(valores)

const carrinho = [
    '{ "nome" : "Borracha", "preco": 3.56}',
    '{ "nome" : "Caderno", "preco": 13.90}',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22}',
    '{ "nome" : "Caneta", "preco": 7.50}'
]

const paraObj = json => JSON.parse(json) //converte JSON para OBJETO
const carrinhoPreco = produto => produto.preco //Retorna apenas o preco do objeto
const resultado = carrinho.map(paraObj).map(carrinhoPreco) //Cria uma variavel pegando os JSON do carrinho para objeto e pegando apenas o preco de cada

console.log(resultado)