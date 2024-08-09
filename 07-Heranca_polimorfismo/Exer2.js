// Crie uma superclasse - Pessoa
// Crie duas subclasses - Estudante e Professor 
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 


class Pessoa{
    nome;
    idade;
    rg;
    cpf;
    naturalidade;
    constructor(nome,idade,rg,cpf,naturalidade){
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
        this.cpf = cpf;
        this.naturalidade = naturalidade;
    }
    exibirInfo(){
        return `Nome:${this.nome} | Idade:${this.idade} | RG:${this.rg} | CPF:${this.cpf} | Naturalidade:${this.naturalidade}`;
    }
}

class Estudante extends Pessoa{
    matricula;
    constructor(nome,idade,rg,cof,naturalidade,matricula){
        super(nome,idade,rg,cof,naturalidade);
        this.matricula = matricula;
    }

    exibirInfo(){
       console.log(`${super.exibirInfo()} | Matricula:${this.matricula}`);
    }
}

class Professor extends Pessoa{
    especialidade;
    constructor(nome,idade,rg,cof,naturalidade,especialidade){
        super(nome,idade,rg,cof,naturalidade);
        this.especialidade = especialidade;
    }

    exibirInfo(){
        console.log(`${super.exibirInfo()} | Especialidade:${this.especialidade}`);
    }
}

const pessoa = new Pessoa('Gustavo', 26, '123456', '123456789', 'Recife-PE');
console.log(pessoa.exibirInfo());

const gustavo = new Estudante('Gustavo', 26, '123456', '123456789', 'Recife-PE', '123456');
gustavo.exibirInfo();

const taise = new Professor('Taise', 25, '123456', '123456789', 'Moreno', 'Programação');
taise.exibirInfo()
