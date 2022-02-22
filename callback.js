function valorCorreto(a, valorReal){
    if(typeof valorReal == 'function' ){ 
    let valor = valorReal(a)
        if(valor != 52){
            console.log(false)
        }else{
            console.log(true)
        }
    }}


valorCorreto(53, function(a){
    return a
    })

// função factory
function novoCachorro(nome, raca){
    return {
        nome,
        raca
    }
}
(function(){
    console.log(4+5)
})()

console.log(novoCachorro('Rex', 'Poodle'))