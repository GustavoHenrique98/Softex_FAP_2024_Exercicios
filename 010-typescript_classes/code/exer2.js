// Exercício 2
// Descrição: Crie uma classe Funcionario com as seguintes propriedades:
// nome (string): o nome do funcionário.
// salario (number): o salário do funcionário.
// A classe deve ter os seguintes métodos:
// obterSalarioAnual(): retorna o salário anual (12 vezes o salário mensal).
// Em seguida, crie uma subclasse Gerente que herda de Funcionario e adiciona as seguintes propriedades:
// bonus (number): valor do bônus anual.
// A subclasse Gerente deve sobrescrever o método obterSalarioAnual() para incluir o bônus no cálculo do salário anual.
// Tarefa:
// Crie um objeto da classe Gerente, calcule o salário anual com o bônus e exiba o resultado.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    Funcionario.prototype.obterSalarioAnual = function () {
        return this.salario * 12;
    };
    return Funcionario;
}());
// Subclasse Gerente que herda de Funcionario
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, bonusAnual) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonusAnual = bonusAnual;
        return _this;
    }
    Gerente.prototype.getBonus = function () {
        return this.bonusAnual;
    };
    Gerente.prototype.setBonus = function (bonus) {
        this.bonusAnual = bonus;
    };
    Gerente.prototype.obterSalarioAnual = function () {
        return _super.prototype.obterSalarioAnual.call(this) + this.bonusAnual;
    };
    return Gerente;
}(Funcionario));
var gerente = new Gerente('Maria', 7000, 15000);
// Calcula o salário anual com o bônus e exibe o resultado
var salarioAnualComBonus = gerente.obterSalarioAnual();
console.log("O sal\u00E1rio anual com b\u00F4nus de ".concat(gerente.getNome(), " \u00E9 R$ ").concat(salarioAnualComBonus));
