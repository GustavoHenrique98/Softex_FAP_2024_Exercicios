// Crie uma superclasse - Pessoa
// Crie duas subclasses - Estudante e Professor 
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 

class Pessoa{
    nome;
    rg;
    cpf;
    idade;
    constructor(nome,rg,cpf,idade){
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
    }
    exibirInfo(){
        return `Nome : ${this.nome} | RG: ${this.rg} | CPF : ${this.cpf} | Idade : ${this.idade}`;
    }
}

const heveny = new Pessoa('Heveny','1.251.361','702.345.645-28',32);
console.log(heveny.exibirInfo());


class Estudante extends Pessoa{
    matricula;
    turma;
    constructor(nome,rg,cpf,idade,matricula,turma){
        super(nome,rg,cpf,idade);
        this.matricula = matricula;
        this.turma = turma;
    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} Matrícula: ${this.matricula} | Turma:${this.turma}`);
    }
}
const gustavo = new Estudante('Gustavo','1.333.444','111.222.333-44',26,'zbx11145698','back-end FAP2024');
gustavo.exibirInfo();

class Professor extends Pessoa{
    especializacao;
    matricula;
    constructor(nome,rg,cpf,idade,especializacao,matricula){
        super(nome,rg,cpf,idade)
        this.especializacao = especializacao;
        this.matricula = matricula;
    }
    exibirInfo(){
        console.log(`${super.exibirInfo()} Especialização:${this.especializacao} | Matrícula:${this.matricula}`);
    }
}

const thaise = new Professor('Thaise','1.555.222','777.555.888-28',25,'PBL','zbxdd445');
thaise.exibirInfo()