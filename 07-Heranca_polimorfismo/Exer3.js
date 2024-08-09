// Crie uma Superclasse - Animal
// Crie duas Subclasses  - Pássaro e Peixe
// Cada classe deve ter um método fazerSom() que imprime um som específico associado ao tipo de animal.
// Requisitos :
// Superclasse Animal
// Construtor que inicializa a propriedade nome.
// Método fazerSom() que deve ser sobrescrito pelas subclasses.
// Subclasse Pássaro
// Construtor que inicializa as propriedades nome e especie.
// Método fazerSom() que imprime um som específico para pássaros.
// Subclasse Peixe
// Construtor que inicializa as propriedades nome e tipo.
// Método fazerSom() que imprime um som específico para peixes.


class Animal {
    nome;
    constructor(nome){
        this.nome = nome
    }

    fazerSom(){
        console.log("O animal está fazendo um som");
    }
}

class Passaro extends Animal {
    especie;
    constructor(nome, especie){
        super(nome)
        this.especie = especie
    }

    fazerSom(){ 
        console.log(`O pássaro ${this.nome} esta fazendo piu piu!`);
    }   
}

class Peixe extends Animal { 
    tipo;
    constructor(nome, tipo){
        super(nome);
        this.tipo = tipo;
    }   
    fazerSom(){
        console.log(`O ${this.nome} esta fazendo GLUB GLUB!`);
    }   
}   

const animal = new Animal("Cachorro");
const passaro = new Passaro("Alfredo", "Tucano");
const peixe = new Peixe("Rogério", "Tubarão");

//Métodos
animal.fazerSom();
passaro.fazerSom();
peixe.fazerSom();
