// Exercício
// Crie uma Superclasse - Funcionario
// Crie duas Subclasses  - Gerente e Desenvolvedor
// Cada classe deve ter um método descricaoCargo() que será sobrescrito para fornecer uma descrição específica do cargo.
// Requisitos :
// Superclasse Funcionario
// Construtor que inicializa as propriedades nome e departamento.
// Método descricaoCargo() que deve ser sobrescrito pelas subclasses.

// Subclasse Gerente
// Construtor que inicializa as propriedades nome, departamento, e nivel.
// Método descricaoCargo() que imprime uma descrição específica sobre o cargo de gerente.

// Subclasse Desenvolvedor
// Construtor que inicializa as propriedades nome, departamento, e linguagem.
// Método descricaoCargo() que imprime uma descrição específica sobre o cargo de desenvolvedor.


class Funcionario {
    nome;
    departamento;
    constructor(nome,departamento){
        this.nome = nome;
        this.departamento = departamento;
    } 
    descricaoCargo() {
        return ` ${this.nome} trabalha no ${this.departamento}`
    }  
}   

class Gerente extends Funcionario { 
    constructor(nome,departamento,nivel){
        super(nome,departamento);
        this.nivel = nivel;
    }
    descricaoCargo() {
       console.log(`${super.descricaoCargo()} com o nivel ${this.nivel}`);
    }  
}

class Desenvolvedor extends Funcionario { 
    linguagem;
    constructor(nome,departamento,linguagem){
        super(nome,departamento);
        this.linguagem = linguagem;
    }
    descricaoCargo() {
       console.log(`${super.descricaoCargo()} com a linguagem ${this.linguagem}`);
    }  
}

//Instanciando classes
const joao = new Funcionario('João','Financeiro');
const maria = new Gerente('Maria','Comercial','Gerente');
const pedro = new Desenvolvedor('Pedro','Desenvolvimento','JavaScript');    

//Métodos
console.log(joao.descricaoCargo());
maria.descricaoCargo();
pedro.descricaoCargo();