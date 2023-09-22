// const gato = new animal('Gato')
// gato.falar() // gato emite um barulho | vai chamar nossa função 

// herança de uma class - é você está reutilizando um conseito de uma classe mais generica para entra em detalhes em uma classe mais nova
// isso é polimorfismo - reeaproveitar em uma outra classe herdando dele e alterando o que prescisar
class Gato extends animal{
    constructor(nome = 'Gato'){
        super(nome)// referenciado a animal 
    }

    falar(){
        console.log(`${this.nome} faz miau. `)
    }
}

const gato = new Gato('Felix')
gato.falar()

// a index especifica mais a classe animal 