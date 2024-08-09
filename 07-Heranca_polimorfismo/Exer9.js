// Crie Superclasse Evento:
// Construtor: Inicializa as propriedades nome e data.
// Método mostrarInformacoes():
// Subclasse Concerto:
// Construtor: herdar as propriedades da superclasse, além de adicionar artista.
// Método mostrarInformacoes(): 
// Subclasse Teatro:
// Construtor: herdar as propriedades da superclasse, além de adicionar peça.
// Método mostrarInformacoes(): 
// Obs: Criar um método diferente para cada um.



class Evento {
    nome;
    data;
    constructor(nome, data) {
        this.nome = nome;
        this.data = data;
    }   
    mostrarInformacoes() {
        return `Nome: ${this.nome} | Data: ${this.data}`;
    }
}

class Concerto extends Evento {
    artista;
    constructor(nome, data, artista) {
        super(nome, data);
        this.artista = artista;
    }
    mostrarInformacoes() {
        console.log(` ${super.mostrarInformacoes()}  | Artista: ${this.artista}`);
    }
}

class Teatro extends Evento {
    pecas;
    constructor(nome, data, pecas) {
        super(nome, data);
        this.pecas = pecas;
    }
    mostrarInformacoes() {
        console.log(` ${super.mostrarInformacoes()} | Peça: ${this.pecas}`);
    }
}
//Instancioando classes

const evento = new Evento("Evento de reclicagem", "20/12/2024");
const show_rock = new Concerto("Show de  Rock", "10/05/2024", "Metallica");
const romeu_julieta = new Teatro("Romeu e Julieta", "02/04/2025", "História de romeu e julieta ");

// Métodos

console.log(evento.mostrarInformacoes());
show_rock.mostrarInformacoes();
romeu_julieta.mostrarInformacoes();