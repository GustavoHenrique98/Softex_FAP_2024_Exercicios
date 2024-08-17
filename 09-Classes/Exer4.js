// 4 - Crie uma classe base Receita, com atributos. Em seguida, crie subclasses Bolo,
// Pizza, e Salada, que implementam o método preparar() de formas específicas.

let {escreve} = require('./escreve.js');
//Abstrata n tem sentido instanciar isso!!!
class Receita {
    nomeReceita;
    ingredientes;
    constructor(nomeReceita, ingredientes) {
        if (this.constructor === Receita) {
            throw new Error('Não é possível instanciar a classe abstrata!!! .');
        }
        this.nomeReceita = nomeReceita;
        this.ingredientes = ingredientes;
    }
    infoReceita(){
        return `\n Nome da receita:${this.nomeReceita}\n Ingredientes:${this.ingredientes}`;
    }
    preparar() {
        // null -_-""
    }
}

class Bolo extends Receita {
    formato;
    tipoBolo;
    constructor(nomeReceita, ingredientes, formato, tipoBolo) {
        super(nomeReceita, ingredientes);
        this.formato = formato;
        this.tipoBolo = tipoBolo;
    }
    infoReceita(){
        console.log(super.infoReceita());
    }
    preparar() {
        console.log(`Preparando o bolo ${this.tipoBolo} em formato ${this.formato} com os ingredientes: ${this.ingredientes.join(', ')}.`);
    }
}

class Pizza extends Receita {
    tamanhoPizza;
    tipoPizza;
    constructor(nomeReceita, ingredientes, tamanhoPizza, tipoPizza) {
        super(nomeReceita, ingredientes);
        this.tamanhoPizza = tamanhoPizza;
        this.tipoPizza = tipoPizza;
    }
    infoReceita(){
        console.log(super.infoReceita());
    }
    preparar() {
    console.log( `Preparando a pizza ${this.tipoPizza} de tamanho ${this.tamanhoPizza} com os ingredientes: ${this.ingredientes.join(', ')}.`);
    }
}

class Salada extends Receita {
    tipoSalada;
    molho;
    constructor(nomeReceita, ingredientes, tipoSalada, molho) {
        super(nomeReceita, ingredientes);
        this.tipoSalada = tipoSalada;
        this.molho = molho;
    }
    infoReceita(){
        console.log(super.infoReceita());
    }
    preparar() {
        console.log( `Preparando a salada ${this.tipoSalada} com molho ${this.molho} e os ingredientes: ${this.ingredientes.join(', ')}.`);
    }
}

// Criando instâncias das subclasses

const boloDeChocolate = new Bolo('Bolo de Chocolate', ['farinha', 'açúcar', 'cacau', 'ovos'], 'redondo', 'chocolate');
const pizzaMargherita = new Pizza('Pizza Margherita', ['massa', 'molho de tomate', 'queijo', 'manjericão'], 'grande', 'margherita');
const saladaCaesar = new Salada('Salada Caesar', ['alface', 'croutons', 'parmesão', 'frango'], 'Caesar', 'especial');
boloDeChocolate.infoReceita();
escreve();
boloDeChocolate.preparar();
escreve();

pizzaMargherita.infoReceita();
escreve();
pizzaMargherita.preparar();
escreve();

saladaCaesar.infoReceita();
escreve();
saladaCaesar.preparar();
