// Crie uma superclasse - Biblioteca 
// Crie duas subclasses - BibliotecaPublica e BibliotecaUniversitaria
// Cada classe deve ter um constructor que inicialize suas propriedades e um método específico. 

class Biblioteca {
    nome;
    endereco;
    livrosDisponiveis;

    constructor(nome, endereco, livrosDisponiveis) {
        this.nome = nome;
        this.endereco = endereco;
        this.livrosDisponiveis = livrosDisponiveis;
    }

    adicionarLivro(livro) {
        this.livrosDisponiveis.push(livro);
    }

    listarLivros() {
        return this.livrosDisponiveis;
    }
}

class BibliotecaPublica extends Biblioteca {
    horarioDeFuncionamento;

    constructor(nome, endereco, livrosDisponiveis, horarioDeFuncionamento) {
        super(nome, endereco, livrosDisponiveis);
        this.horarioDeFuncionamento = horarioDeFuncionamento;
    }

    exibirHorario() {
        return `Horário de Funcionamento: ${this.horarioDeFuncionamento}`;
    }
}

class BibliotecaUniversitaria extends Biblioteca {
    universidadeAssociada;

    constructor(nome, endereco, livrosDisponiveis, universidadeAssociada) {
        super(nome, endereco, livrosDisponiveis);
        this.universidadeAssociada = universidadeAssociada;
    }

    exibirUniversidade() {
        return `Universidade Associada: ${this.universidadeAssociada}`;
    }
}

// Instanciando a classe BibliotecaPublica
const bibliotecaPublica = new BibliotecaPublica(
    "Biblioteca Central",
    "Rua das Flores, 123",
    ["Dom Casmurro", "O Pequeno Príncipe", "1984"],
    "08:00 - 18:00"
);

console.log(bibliotecaPublica.listarLivros());
console.log(bibliotecaPublica.exibirHorario());




// Instanciando a classe BibliotecaUniversitaria
const bibliotecaUniversitaria = new BibliotecaUniversitaria(
    "Biblioteca da Universidade",
    "Avenida Universitária, 456",
    ["Cálculo", "Física", "Química Orgânica"],
    "Universidade Federal de Pernambuco"
);

console.log(bibliotecaUniversitaria.listarLivros());
console.log(bibliotecaUniversitaria.exibirUniversidade());
