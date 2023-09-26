// string declarada globalmentes no arquivo
const a = 'Hello World' // Escopo Global

function print(){
    const b = 'Olá a todos' //Escopo da Função
    console.log(a)
    if(a.length > 2){
        var c = 'Olá a todos mais uma vez' //Escopo do Bloco
        // variáveis definidas como let e const elas são restritas ao bloco

    }
}
print()
// a variável definida como var consegue ser acessada fora do escopo | herdadas esternamente
// var é uma variável multavel 