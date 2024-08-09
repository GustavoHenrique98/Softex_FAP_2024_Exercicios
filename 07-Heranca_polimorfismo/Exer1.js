// Crie uma superclasse - Veículo
// Crie duas subclasses - Carro e Bicicleta 
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 

class Veiculo{
    nome;
    marca;
    modelo;
    preco;
    constructor(nome,marca,modelo,preco){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
    }
    exibirInfo(){
        return `Nome:${this.nome} | Marca:${this.marca} | Modelo:${this.modelo} | Preço:${this.preco}`;
    }
}

class Carro extends Veiculo{
    tipoVeiculo;
    constructor(nome,marca,modelo,preco,tipoVeiculo){
        super(nome,marca,modelo,preco);
        this.tipoVeiculo = tipoVeiculo;
    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} | Modelo${this.modelo}`);
    }
}


class Bicicleta extends Veiculo{
    tipoBicicleta;
    constructor(nome,marca,modelo,preco,tipoBicicleta){
        super(nome,marca,modelo,preco)
        this.tipoBicicleta = tipoBicicleta;
    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} | Tipo da bicicleta ${this.tipoBicicleta}`);
    }
}

//Instanciando classes.
const patinete = new Veiculo('Patinete a jato','Stark INC','Z-47',10000.50);
const mustang = new Carro('Mustang','Mustang Industries','GT',200000,'Carro esportivo');
const caloi = new Bicicleta("Caloi Montanha", "Caloi", "Montana X", 1200, "Montanha");

//Métodos
console.log(patinete.exibirInfo());
mustang.exibirInfo();
caloi.exibirInfo();