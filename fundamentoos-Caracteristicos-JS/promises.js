function test(){
    return new Promise(function(resolve, reject){ // Promise é uma class no js que recebe como inicializador uma função - resove > renotne o status fulfilled e reject para o status rejected 
        setTimeout(function() { // setTimeout - espera um ceta quantidade de tempo para executar
            resolve('ok') 
            // reject('erro')

        }, 2000)// = 2 segundos
    }) 
}

test().then(function(resultado){
    console.log(resultado)
}).catch(function(resultadoErro){
    console.log(resultadoErro)
}).finally(function(){
    console.log('Idependente do resultado, eu sempre sou execultado')
})

console.log('fim')

// palabras reservadas Async e Await 