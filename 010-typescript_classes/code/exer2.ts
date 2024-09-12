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

class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public obterSalarioAnual(): number {
        return this.salario * 12;
    }
}

// Subclasse Gerente que herda de Funcionario
class Gerente extends Funcionario {
    private bonusAnual: number;

    constructor(nome: string, salario: number, bonusAnual: number) {
        super(nome, salario);
        this.bonusAnual = bonusAnual;
    }

    public getBonus(): number {
        return this.bonusAnual;
    }

    public setBonus(bonus: number): void {
        this.bonusAnual = bonus;
    }

    public obterSalarioAnual(): number {
        return super.obterSalarioAnual() + this.bonusAnual;
    }
}

const gerente = new Gerente('Maria', 7000, 15000);

// Calcula o salário anual com o bônus e exibe o resultado
const salarioAnualComBonus = gerente.obterSalarioAnual();
console.log(`O salário anual com bônus de ${gerente.getNome()}é R$ ${salarioAnualComBonus}`);