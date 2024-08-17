// 2 - Crie uma classe base chamada Postagem com os atributos autor, conteudo, e
// data. 

// Em seguida, crie subclasse PostagemTexto, PostagemImagem, e
// PostagemVideo, que herdam de Postagem.

// Cada uma dessas classes deve ter um
// atributo específico, como numeroDePalavras para PostagemTexto, resolucao para
// PostagemImagem, e duracao para PostagemVideo.

// Tarefas:

// 1. Crie um método exibir() na classe base Postagem que deve ser sobrescrito
// nas classes derivadas para exibir o conteúdo de forma apropriada.

// 2. Crie instâncias de cada classe e use o método exibir() para mostrar as
// postagens.

let {escreve} = require('./escreve.js');
class Postagem{
    autor;
    conteudo;
    data;
    constructor(autor,conteudo,data){
        this.autor = autor;
        this.conteudo = conteudo;
        this.data = data;
        
    }

    exibir(){
        return `Autor:${this.autor}\n Conteudo:${this.conteudo}\n Data:${this.data}`;
    }
}

class PostagemTexto extends Postagem{
    numeroCaracteres;
    constructor(autor,conteudo,data){
        super(autor,conteudo,data)
        this.numeroCaracteres = this.conteudo.length;
    }
    exibir(){
        console.log(`${super.exibir()}\n Quantidade de caracteres:${this.numeroCaracteres}`);
    }
    

}

class PostagemImagem extends Postagem{
    resolucaoImagem;
    constructor(autor,conteudo,data,resolucaoImagem){
        super(autor,conteudo,data)
        this.resolucaoImagem = resolucaoImagem;
    }
    exibir(){
        console.log(`${super.exibir()}\n Resolução:${this.resolucaoImagem}`);
    }
    
}

class PostagemVideo extends Postagem{
    duracaoVideo;
    constructor(autor,conteudo,data,duracaoVideo){
        super(autor,conteudo,data)
        this.duracaoVideo = duracaoVideo;
    }
    exibir(){
        console.log(`${super.exibir()}\n Duração do vídeo:${this.duracaoVideo}`);
    }
}


//Instanciando 
const postTexto = new PostagemTexto('Gustavo','Softex é legal','16/08/2024');
const postImg = new PostagemImagem('vangogh','Quadro de vanghog','16/08/2024','1280x720');
const PostVideo = new PostagemVideo('Nando Moura','Jovem Exxpertinho','16/08/2024','13:00');
//Métodos
postTexto.exibir();
escreve();

postImg.exibir();
escreve();

PostVideo.exibir();






