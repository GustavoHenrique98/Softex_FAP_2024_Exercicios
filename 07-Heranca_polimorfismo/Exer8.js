// Crie Superclasse Documento:
// Construtor: Inicializa as propriedades titulo e autor.
// Método exibirDetalhes(): 
// Subclasse Relatorio:
// Construtor: herdar as propriedades da superclasse, além de adicionar data.
// Método exibirDetalhes(): 
// Subclasse Artigo:
// Construtor: herdar as propriedades da superclasse, além de adicionar revista.
// Método exibirDetalhes(): 
// Obs: Criar um método diferente para cada um.

class Documento {
    titulo;
    autor;
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }   
    exibirDetalhes() {
        return(`Título: ${this.titulo} | Autor: ${this.autor}`);
    }
}

class Relatorio extends Documento {
    data;
    constructor(titulo, autor, data) {
        super(titulo, autor);
        this.data = data;
    }
    exibirDetalhes() {
        console.log(` ${super.exibirDetalhes()} Data: ${this.data}`);
    }
}   

class Artigo extends Documento {
    revista;
    constructor(titulo, autor, revista) {
        super(titulo, autor);
        this.revista = revista;
    }
    exibirDetalhes() {
        console.log(` ${super.exibirDetalhes()} Revista: ${this.revista}`);
    }
}

//Instanciando classes
const documento = new Documento('Certidão de nascimento','Cartório de recife');
const artigo = new Artigo('Fome na rua','Robison','Veja');
const relatorio = new Relatorio('Relatorio de vendas','Gerente comercial Carlos','01/01/2025');

//Métodos
console.log(documento.exibirDetalhes());
artigo.exibirDetalhes();
relatorio.exibirDetalhes();
