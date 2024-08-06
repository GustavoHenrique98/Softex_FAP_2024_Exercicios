class FormaGeometrica {
    constructor() {
        if (this.constructor === FormaGeometrica) {
            throw new Error('Não é possível criar uma instância diretamente da classe FormaGeometrica.');
        }
    }
    calcularArea(){
        
    }
    calcularPerimetro(){

    }
}  

const teste = new FormaGeometrica();