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

class Funcionario{
    nome;
    departamento;
    constructor(nome,departamento){
        this.nome = nome;
        this.departamento = departamento;
    }
    descricaoCargo(){
        return `Nome: ${this.nome} | Departamento : ${this.departamento}`;
    }
}

class Gerente extends Funcionario{
    nivel
    constructor(nome,departamento,nivel){
        super(nome,departamento)
        this.nivel = nivel;
    }
    descricaoCargo(){
        console.log(`${super.descricaoCargo()} | Nível ${this.nivel}`);
    }
}   

class Desenvolvedor extends Funcionario{
    linguagem;
    constructor(nome,departamento,linguagem){
        super(nome,departamento);
        this.linguagem = linguagem;
    }
    descricaoCargo(){
        console.log(`${super.descricaoCargo()} | Linguagem de programação principal : ${this.linguagem}`);
    }
}


const cremilda = new Funcionario('Cremilda','Comercial')
console.log(cremilda.descricaoCargo());

const magda = new Gerente('Magda','T.I','Gerente');
magda.descricaoCargo();

const gustavo = new Desenvolvedor('Gustavo','Full-Stack','Java');
gustavo.descricaoCargo()