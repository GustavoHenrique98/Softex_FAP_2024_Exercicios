// Crie uma superclasse - Veículo
// Crie duas subclasses - Carro e Bicicleta 
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 

class Veiculo {
    marca;
    modelo;
    ano;
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    info() {
      return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
  }
  
  class Bicicleta extends Veiculo {
    tipoBicicleta;
    constructor(marca, modelo, ano, tipoBicicleta) {
      super(marca, modelo, ano);
      this.tipoBicicleta = tipoBicicleta; 
    }
  
    info(){
        console.log(`${super.info()}, Tipo: ${this.tipoBicicleta}`);
    }

  }
  class Carro extends Veiculo {
    tipoCarro;
    tipoCombustivel;
    constructor(marca, modelo, ano, tipoCarro,tipoCombustivel){
        super(marca, modelo, ano);
       this.tipoCarro = tipoCarro;
       this.tipoCombustivel = tipoCombustivel;
    }

    info() {
        console.log(`${super.info()}, tipo do carro: ${this.tipoCarro} Combustível: ${this.tipoCombustivel}`);
    }
}

//Instanciando a classe veículo
const veiculo1 = new Veiculo('')


//Instanciando a classe bicicleta
const caloi = new Bicicleta('Caloi','Elite','2024','Montanha');
caloi.info();

//Instanciando a classe Carro
const mustang = new Carro('Mustang','GT','2024','Esportivo','Gasolina')
mustang.info();


