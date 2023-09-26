class animal {
    constructor(nome){ // toda classe prescisa de um constructor que é quando você for declarar uma variável, um objeto dessa classe você prescissa inicializar ele de alguma forma
        this.nome = nome;
    }

    falar(){ // função associada ao class animal 
        console.log(`${this.nome} emite um barulho.`)
    }
}