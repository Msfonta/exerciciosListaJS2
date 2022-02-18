const notas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
const par = []
const impar = []


notas.forEach(nota => {
    if(nota % 2 == 0){
       par.push(nota)
    }else {
        impar.push(nota)
    }
})

console.log('Par: ',par)
console.log('Impar: ',impar)