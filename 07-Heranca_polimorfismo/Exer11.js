// Crie uma classe - Instrumentomusical
// Crie duas subclasses - Violão e Piano 
// Lançar um erro se tentar criar uma instância diretamente da classe Instrumentomusical

//Importando a função do exer10 ;

class Instrumentomusical {
    tipo;
    marca;
    modelo;
    ano_fabricacao;
    constructor(tipo,marca,modelo,ano_fabricacao){
        if(this.constructor === Instrumentomusical){
            throw new Error("Instrumentomusical é uma classe abstrata portanto não pode ser instanciada");
        }
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
    }
    emitirSom(){
        return `O  ${this.tipo} da Marca ${this.marca} e modelo ${this.modelo} está emitindo um som`;
    }
}
class Violao extends Instrumentomusical {
    tipo_violao;
    constructor(tipo, marca, modelo, ano_fabricacao, tipo_violao){
        super(tipo, marca, modelo, ano_fabricacao);
        this.tipo_violao = tipo_violao;
    }
    emitirSom(){
        console.log(`${super.emitirSom()}`);
    };
}
class Piano extends Instrumentomusical {
    tipo_piano;
    constructor(tipo, marca, modelo, ano_fabricacao, tipo_piano){
        super(tipo, marca, modelo, ano_fabricacao);
        this.tipo_piano = tipo_piano;
    }
    emitirSom(){
        console.log(`${super.emitirSom()}`);
    };
}

//Instanciando classes

try{
    const eletronico = new Instrumentomusical();
    console.log(Instrumentomusical);
}catch(error){
    console.log(error.message);
}

const violao1 = new Violao("Violão", "Gibson", "Les Paul", 2023, "Classico");
violao1.emitirSom();


const piano1 = new Piano("Piano", "Yamaha", "YMP-150", 2023, "Classico");
piano1.emitirSom();




