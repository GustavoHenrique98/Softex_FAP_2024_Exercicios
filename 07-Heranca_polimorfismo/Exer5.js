// Crie uma classe - Formageométrica 
// Crie duas subclasses - Círculo e Retângulo 
// Lançar um erro se tentar criar uma instância diretamente da classe Formageometrica


class FormaGeometrica {
    constructor(){
        if( this.constructor === FormaGeometrica){
            throw new Error("Formageometrica é uma classe abstrata portanto não pode ser instanciada");
        }
    }

    area(){

    }

    perimetro(){

    }
}

class Circulo extends FormaGeometrica {
    raio;
    constructor(raio){
        super();
        this.raio = raio;
    }

    area(){
        return Math.PI * (this.raio * this.raio);
    }

    perimetro(){
        return (2 * Math.PI) * this.raio;
    }
}

class Retangulo extends FormaGeometrica {
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }   

    area(){
       return this.largura * this.altura;
    }

    perimetro(){
        return 2 * (this.largura + this.altura);
    }
}

try{
    const quadrado = new FormaGeometrica(4);
    console.log(quadrado);
}catch(error){
    console.log(error.message);
}


//Instanciando as classes
const circulo = new Circulo(10);
const retangulo = new Retangulo(10,5);

//Executando os métodos
console.log("Área do círculo:", circulo.area().toFixed(2));
console.log("Perímetro do círculo:", circulo.perimetro().toFixed(2));
console.log("Área do retângulo:", retangulo.area());
console.log("Perímetro do retângulo:", retangulo.perimetro());

