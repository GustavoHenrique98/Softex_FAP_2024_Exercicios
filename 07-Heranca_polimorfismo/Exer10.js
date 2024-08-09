// Crie uma classe - Eletronico
// Crie duas subclasses - Celular e Computador 
// Lançar um erro se tentar criar uma instância diretamente da classe Eletronico

function separaTexto(){
    console.log('------------------------------------------------------');
}

module.exports = {separaTexto};
class Eletronico {
    tipo;
    marca;
    modelo;
    ano_fabricacao;
    constructor(tipo,marca,modelo,ano_fabricacao){
        if(this.constructor === Eletronico){
            throw new Error("Eletronico é uma classe abstrata portanto não pode ser instanciada");
        }
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
    }
    ligar(){ 
        return(`O ${this.marca} do ${this.modelo} foi ligado`);
    }
    desligar(){
        return(`O ${this.marca} do ${this.modelo} foi desligado`);
    }
    exibirInfo(){
        return(`Tipo:${this.tipo} | Marca:${this.marca} | modelos:${this.modelo} | Ano de fabricação:${this.ano_fabricacao}`);
    }
}

class Celular extends Eletronico {
    cor;
    tamanho;
    bateria;
    constructor(tipo, marca, modelo, ano_fabricacao, cor, tamanho, bateria){
        super(tipo, marca, modelo, ano_fabricacao);
        this.cor = cor;
        this.tamanho = tamanho;
        this.bateria = bateria;
    }
    ligar(){
        console.log(`${super.ligar()}`);
    }
    desligar(){
        console.log(`${super.desligar()}`);
    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} | Cor:${this.cor} | Tamanho:${this.tamanho} | Bateria:${this.bateria}`);
    }

   

}

class Computador extends Eletronico {
    processador;
    teclado;
    mouse;
    monitor;
    constructor(tipo, marca, modelo, ano_fabricacao, processador, teclado, mouse, monitor){
        super(tipo, marca, modelo, ano_fabricacao);
        this.processador = processador;
        this.teclado = teclado;
        this.mouse = mouse;
        this.monitor = monitor;
    }
  
    ligar(){

    }
    desligar(){

    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} | Processador:${this.processador} | Teclado:${this.teclado} | Mouse:${this.mouse} | Monitor:${this.monitor}`);
    }

}

//Instanciando as classes

try{
    const eletronico1 = new Eletronico();
    console.log(eletronico1);
}catch(error){
    console.log(error.message);
}

const celular1 = new Celular("celular", "Samsung", "Galaxy S20", 2023, "Prata", "5.5", "5000mAh");
celular1.ligar();
celular1.desligar();
separaTexto();
celular1.exibirInfo();


const computador1 = new Computador("computador", "HP", "Pavilion", 2024, "Intel Core i5", "Teclado Red Dragon", "Mouse Red Dragon", "Monitor LG");
computador1.ligar();
computador1.desligar();
separaTexto();
computador1.exibirInfo();
