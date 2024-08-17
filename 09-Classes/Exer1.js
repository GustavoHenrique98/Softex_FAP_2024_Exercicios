let {escreve} = require('./escreve')
// 1 - Crie uma classe base chamada ArtefatoMagico com os atributos nome, poder e
// raridade.

//  Em seguida, crie Subclasses AnelMagico, VarinhaMagica e CristalMagico,
// que herdam de ArtefatoMagico. 

//Cada uma dessas classes deve ter um atributo
// específico, como elemento para AnelMagico,

//tipoDeMadeira para VarinhaMagica, e
// cor para CristalMagico.

// Tarefas:
// 1. Implemente o método usarPoder() na classe ArtefatoMagico para mostrar
// uma mensagem geral de uso de poder.

// 2. Nas classes derivadas, sobrescreva o método usarPoder() para exibir
// mensagens específicas baseadas no tipo de artefato.

// 3. Crie instâncias de cada classe e chame o método usarPoder() para
// demonstrar o comportamento.

class ArtefatoMagico{
    nome;
    poder;
    raridade;
    constructor(nome,poder,raridade){
        this.nome = nome;
        this.poder = poder;
        this.raridade = raridade;
    }
    usarPoder(){
        console.log(`O artefato mágico está usando um poder...`);
    }
    info(){
        return `Nome:${this.nome}\n Poder:${this.poder}\n Raridade:${this.raridade}`;
    }
}

class AnelMagico extends ArtefatoMagico{
    elemento;
    constructor(nome,poder,raridade,elemento){
        super(nome,poder,raridade);
        this.elemento = elemento;
    }
    info(){
        console.log(`${super.info()}\n Elemento:${this.elemento}`);
    }
    usarPoder(){
        console.log(`O anel está emitindo uma aura que aprimora magias de ${this.elemento}`);
    }
}

class VarinhaMagica extends ArtefatoMagico{
    tipoDeMadeira;
    constructor(nome,poder,raridade,tipoDeMadeira){
        super(nome,poder,raridade)
        this.tipoDeMadeira = tipoDeMadeira;
    }
    info(){
        console.log(`${super.info()}\n Tipo da madeira:${this.tipoDeMadeira}`);
    }
    usarPoder(){
        console.log(`A varinha está lançando um feitiço de ${this.poder}`);
    }
} 

class CristalMagico extends ArtefatoMagico{
    cor;
    constructor(nome,poder,raridade,cor){
        super(nome,poder,raridade)
        this.cor = cor;
    }
    info(){
        console.log(`${super.info()}\n Cor:${this.cor}`);
    }
    usarPoder(){
        console.log(`O item ${this.raridade} ${this.nome} está emitindo um poder de ${this.poder}!! `);
    }
}

const anel = new AnelMagico("Anel de Fogo", "Controle de Chamas", "Raro", "Fogo");
const varinha = new VarinhaMagica("Varinha de Carvalho", "Destruição", "Épico", "Carvalho",);
const cristal = new CristalMagico("Cristal de Gelo", "Manipulação de Gelo", "Lendário", "Azul");

anel.info();
anel.usarPoder();
escreve();

varinha.info();
varinha.usarPoder();
escreve();

cristal.info();
cristal.usarPoder();
escreve()
