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

class Animal{
    nome;
    constructor(nome){
        this.nome = nome;
    }

    fazerSom(som){
        console.log(`O animal ${this.nome} faz ${som}`);
    }
}

class Passaro extends Animal{
    especie;
    constructor(nome,especie){
        super(nome);
        this.especie = especie;
    }
    fazerSom(){
        console.log(`O pássaro ${this.nome} faz piu piu.`);
    }
}

class Peixe extends Animal{
    tipo;
    constructor(nome,tipo){
        super(nome);
        this.tipo=tipo;

    }
    fazerSom(){
        console.log(`O Peixe ${this.nome} do tipo ${this.tipo} faz glub glub .`);
    }
}

const gato = new Animal('Rogério');
gato.fazerSom('Miau');

const canario = new Passaro('Gremilda')
canario.fazerSom()

const roberval = new Peixe('Roberval',' Cartilaginoso')
roberval.fazerSom();

