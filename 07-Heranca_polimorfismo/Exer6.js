// Crie uma superclasse - Conta
// Crie duas subclasses - PF e PJ 
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 


class Conta{
    numero;
    agencia;
    saldo;
    constructor(numero,agencia,saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    depositar(deposito){
        this.saldo += deposito;
    }

    sacar(saque){
        this.saldo -= saque;
    }

    extrato(){
        return this.saldo;
    }
}

class Pf extends Conta{
    cpf;
    nome;
    constructor(numero,agencia,saldo,cpf,nome){
        super(numero,agencia,saldo);
        this.cpf = cpf;
        this.nome = nome;
    }
}

class Pj extends Conta{
    cnpj;
    nome;
    constructor(numero,agencia,saldo,cnpj,nome){
        super(numero,agencia,saldo);
        this.cnpj = cnpj;
        this.nome = nome;
    }
}


// Instanciando a classe PF 
const contaPF = new Pf("12345-6", "001", 1000, "123.456.789-00", "João Ribeiro");
contaPF.depositar(500);
contaPF.sacar(200);
console.log(`Extrato PF - ${contaPF.nome}: R$ ${contaPF.extrato()}`);

// Instanciando a classe PJ 
const contaPJ = new Pj("98765-4", "002", 5000, "12.345.678/0001-00", "Empresa qualquer ");
contaPJ.depositar(2000);
contaPJ.sacar(1500);
console.log(`Extrato PJ - ${contaPJ.nome}: R$ ${contaPJ.extrato()}`);
