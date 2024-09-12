// Descrição: Crie uma classe Carro que tenha as seguintes propriedades privadas:
// marca (string): a marca do carro.
// modelo (string): o modelo do carro.
// ano (number): o ano de fabricação do carro.
//Exercicio 1
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.getMarca = function () {
        return this.marca;
    };
    Carro.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Carro.prototype.obterDetalhes = function () {
        console.log("Marca:".concat(this.marca, " | Modelo:").concat(this.modelo, " | Ano:").concat(this.ano));
    };
    Carro.prototype.obterIdade = function (anoAtual) {
        console.log("A idade do carro \u00E9 : ".concat(anoAtual - this.ano));
    };
    return Carro;
}());
var chevrolet = new Carro('Chevrolet', 'Opala', 1998);
chevrolet.obterDetalhes();
chevrolet.obterIdade(2024);
