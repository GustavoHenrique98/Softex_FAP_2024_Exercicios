let {escreve} = require('./escreve.js');
// 3 - Descrição:
// Crie uma classe abstrata CorpoCeleste com os atributos nome, massa, e orbita. A
// classe deve ter um método abstrato calcularGravidade(). Em seguida, subclasses
// Planeta, Asteroide e Lua, que herdam de CorpoCeleste. Cada uma dessas classes
// deve implementar o método calcularGravidade() de acordo com as propriedades
// específicas do corpo celeste.
// Tarefas:
// 1. Implemente o método calcularGravidade() em cada uma das subclasses.
// 2. Crie instâncias de Planeta, Asteroide, e Lua, e demonstre a implementação
// chamando o método calcularGravidade() para cada uma.
// 3. Adicione um método descrever() na classe base CorpoCeleste que exiba as
// principais características do corpo celeste, como o nome, massa e tipo de
// órbita.

class CorpoCeleste {
    constructor(nome, massa, orbita) {
        if (new.target === CorpoCeleste) {
            throw new Error('Não é possível instanciar a classe abstrata CorpoCeleste!');
        }
        this.nome = nome;
        this.massa = massa;
        this.orbita = orbita;
    }

    calcularGravidade() {
        throw new Error('O método calcularGravidade() deve ser implementado nas subclasses!');
    }
}

class Planeta extends CorpoCeleste {
    constructor(nome, massa, orbita, raio) {
        super(nome, massa, orbita);
        this.raio = raio;
    }

    calcularGravidade() {
        const gravidade = 6.674 * Math.pow(10, -11);
        return (gravidade * this.massa) / Math.pow(this.raio, 2);
    }
}

class Asteroide extends CorpoCeleste {
    constructor(nome, massa, orbita, densidade) {
        super(nome, massa, orbita);
        this.densidade = densidade;
    }

    calcularGravidade() {
        const gravidade = 6.674 * Math.pow(10, -11);
        return gravidade * this.densidade * this.massa;
    }
}

class Lua extends CorpoCeleste {
    constructor(nome, massa, orbita, distanciaDoPlaneta) {
        super(nome, massa, orbita);
        this.distanciaDoPlaneta = distanciaDoPlaneta;
    }

    calcularGravidade() {
        const gravidade = 6.674 * Math.pow(10, -11);
        return (gravidade * this.massa) / Math.pow(this.distanciaDoPlaneta, 2);
    }
}

// Instancias
const terra = new Planeta('Terra', 5.972 * Math.pow(10, 24), 'Sol', 6.371 * Math.pow(10, 6));
const asteroide = new Asteroide('Asteroide', 9.393 * Math.pow(10, 20), 'Sol', 2.16 * Math.pow(10, 3));
const lua = new Lua('Lua', 7.342 * Math.pow(10, 22), 'Terra', 3.844 * Math.pow(10, 8));

// Métodos
console.log(`Gravidade na Terra: ${terra.calcularGravidade()} m/s²`);
escreve();
console.log(`Gravidade do Asteróide: ${asteroide.calcularGravidade()} m/s²`);
escreve();
console.log(`Gravidade na Lua: ${lua.calcularGravidade()} m/s²`);
