// Lista de Exercícios
// 1. Crie uma função que receba o seu nome como (parâmetro) e exiba no console
    function olaPessoa(nome){
        console.log(`Olá ${nome}`);
    }
    olaPessoa('Gustavo');
// 2. Crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros)
// e exiba no console
    function exibirInfo(nome,idade,estiloMusical){
        console.log(`Nome : ${nome}\n Idade : ${idade} \n Estilo musical preferido ${estiloMusical}`);
    }
    exibirInfo('Gustavo',26,'Heavy Metal');
/* 3. Crie uma função que receba um filme, uma música (parâmetros) e exiba no console*/
    function exibir(filme,musica){
        console.log(`Nome do filme : ${filme} \n Nome da música: ${musica}`);
    }
    exibir('MadMax','The final Countdown');
/* 4. Crie uma função que retorne o triplo do número recebido no parâmetro da função*/
    function triplo(numero){
        return numero*3
    }
    console.log(triplo(3));

/* 5. Precisamos limitar as posições em que um inimigo pode andar na tela. A
 menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou
 menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao
 que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo,
 verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e
 100.*/
    function limitaPosicao(posicao){
        const correcaoPositivo = 100;
        const correcaoNegativo = 0;
        if(posicao>=0 && posicao<=100){
            console.log(`A posição digitada (${posicao}) é válida pois está no limite do  layout `);
        }else{
            console.log(`A posição digitada (${posicao}) é invalida pois sai do limite estabelecido no layout`);
            
            if(posicao >100){
                console.log(`A posição digitada ultrapassa o limite máximo de ${correcaoPositivo} e foi corrigida para posição máxima da tela . `);
                posicao = correcaoPositivo;
                console.log(`Valor corrigido : ${posicao}`);
            }else if(posicao <0){
                console.log(`A posição digitada ultrapassa o limite máximo de ${correcaoNegativo} e foi corrigida para posição mínima da tela. `);
                posicao = correcaoNegativo;
                console.log(`Valor corrigido : ${posicao}`);
            } 
        }
    }

    limitaPosicao(-1000);
    limitaPosicao(80);
    limitaPosicao(110)







