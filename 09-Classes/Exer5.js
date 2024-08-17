let {escreve} = require('./escreve.js');


// 5 - Crie uma classe base Unidade com atributos como nome, vida, e ataque. Crie
// subclasses Arqueiro, Cavaleiro, e Mago, cada uma com uma estratégia de ataque
// diferente implementada no método atacar().

class Unidade{
    nome_unidade;
    nivel;
    hp;
    mp;
    classe_unidade;

    constructor(nome_unidade,nivel,hp,mp,classe_unidade){
        if(this.constructor===Unidade){
            throw new Error('Não é possível instanciar a classe base !');
        }
        this.nome_unidade = nome_unidade;
        this.nivel= nivel;
        this.hp = hp;
        this.mp = mp;
        this.classe_unidade = classe_unidade;
    }
    status(){
        return `\n Nome:${this.nome_unidade}\n Nivel:${this.nivel}\n HP:${this.hp}\n MP:${this.mp}\n Classe:${this.classe_unidade}`
    }
    atacar(){
        return `O personagem ${this.nome_unidade} de nível ${this.nivel} e classe ${this.classe_unidade}`
    }
}


class Arqueiro extends Unidade{
    estrategia_arqueiro;
    constructor(nome_unidade,nivel,hp,mp,classe_unidade,estrategia_arqueiro) {
        super(nome_unidade,nivel,hp,mp,classe_unidade)
        this.estrategia_arqueiro = estrategia_arqueiro; 
    }

    status(){
        console.log(super.status());
    }
    atacar(){
        console.log(`${super.atacar()} executou uma estrategia de ${this.estrategia_arqueiro}`);
    }
}

class Cavaleiro extends Unidade{
    estrategia_cavaleiro;
    constructor(nome_unidade,nivel,hp,mp,classe_unidade,estrategia_cavaleiro) {
        super(nome_unidade,nivel,hp,mp,classe_unidade)
        this.estrategia_cavaleiro = estrategia_cavaleiro; 
    }

    status(){
        console.log(super.status());
    }

    atacar(){
        console.log(`${super.atacar()} executou uma estrategia de ${this.estrategia_cavaleiro}`);
    }
}

class Mago extends Unidade{
    estrategia_mago;
    constructor(nome_unidade,nivel,hp,mp,classe_unidade,estrategia_mago) {
        super(nome_unidade,nivel,hp,mp,classe_unidade)
        this.estrategia_mago = estrategia_mago; 
    }
    status(){
        console.log(super.status());
    }
    atacar(){
        console.log(`${super.atacar()} executou uma estrategia de ${this.estrategia_mago}`);
    }
}


try{
    // Forçando qualquer coisa pra dar erro -_-""
    const unidade1 = new Unidade('teste não vai funcionar mesmo -_-" ');
    console.log(unidade1);
}catch(err){
    console.log(err.message);
}

//Instancias

const joseDasFlecha = new Arqueiro('JoseDasFlecha',120,12000,200,'Arqueiro','usar uma magia de arqueiro que atire multiplas flechas');
const jucelinoDaPexera = new Cavaleiro('JucelinoDaPexera',400,40000,2000,'Cavaleiro','Investir diretamente nos inimigos com um ataque direto');
const josefinaMacumbeira = new Mago('josefinaMacumbeira',70000,2000,80000,'Mago','Soltou uma macumba que deixou todo mundo girando e dançando');
//Métodos!
joseDasFlecha.status()
escreve();
joseDasFlecha.atacar();
escreve();

jucelinoDaPexera.status()
escreve();
jucelinoDaPexera.atacar();
escreve();

josefinaMacumbeira.status()
escreve();
josefinaMacumbeira.atacar();
