/*Atividade:
Defina uma função chamada soma que recebe dois
números como parâmetros e imprime a soma deles.
Depois, chamá-la com dois números diferentes.*/
function soma(n1,n2){
    console.log(`O resultado da soma foi ${n1+n2}`);
}
soma(2,3);
/*Atividade:
Defina uma função chamada multiplica que recebe
dois números, retorna o produto deles e armazena o
resultado em uma variável para exibi-lo no console.
Exercício*/
function multiplica(n1,n2){
    return n1*n2;
}
let resultMulti = multiplica(2,3);
console.log(`O resultado da multiplicação ${resultMulti}`);


/*1. Defina uma função chamada calculaAreaRetangulo que recebe a
largura e a altura de um retângulo como parâmetros e retorna a área
do retângulo. Chame a função com diferentes valores e imprima os
resultados. */

function calculaAreaRetangulo(largura,altura){
    const area = largura*altura;
    return `A área do retângulo é ${area}`; 
}
console.log(calculaAreaRetangulo(10,5));
console.log(calculaAreaRetangulo(20,10));


// 2. Defina uma função chamada maiorNumero que recebe dois números
// como parâmetros e retorna o maior número. Chame a função e exiba
// o resultado no console.

function maiorNumero(n1,n2){
    if(n1>n2){
        return(`O maior número passado em parâmetro é ${n1}`);
    }else{
        return(`O maior número passado em parâmetro  é ${n2}`);
    }
};

console.log(maiorNumero(1,2));
console.log(maiorNumero(3,1));