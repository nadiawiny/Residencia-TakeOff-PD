// palavras reservadas Async e Await 
// -- Async - forma de declarar um pedaço de codigo/ função assíncrona 
//-- Await - permite que a gente execute um codigo assíncrono de forma síncrona

//função assincrona
async function test(){
    console.log('test')
    return 2+4
}

async function soma(a, b){
    const resultadoTest = await test() // await para esperar outra função assincrona
    return resultadoTest
}

// capiturou o resultado de test usando uma Promise
const resultadoSoma = new Promise(function(resolve, reject){
    resolve(soma(2, 4))
})
resultadoSoma.then(function(resultado){
    console.log(resultado)
})