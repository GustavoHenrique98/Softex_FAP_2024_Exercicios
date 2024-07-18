function calcular(n1,n2,operacao){
    if(operacao =="soma"){
        return "O resultado da soma de " + n1 + " + " + n2 + " é igual a : " + (n1+n2);

    }else if(operacao =="subtração"){
        if (n1 < n2) {
            return "O resultado da subtracao de " + n1 + " - " + n2 + " é igual a : " + (n2 - n1);
        } else {
            return "O resultado da subtracao de " + n1 + " - " + n2 + " é igual a : " + (n1 - n2);
        }

    }else if(operacao =="multiplicação"){
        return "O resultado multiplicacao de " + n1 + " X " + n2 + " é igual a : " + (n1*n2);

    }else if(operacao =="divisão"){
        return "O resultado da divisão de " + n1 + " / " + n2 + " é igual a : " + (n1/n2);
    }
}

let n1 = parseInt(prompt("Digite um número "));
let n2 = parseInt(prompt("Digite outro número "));
let operacao = prompt("Digite o tipo de operação que deseja realizar.");
let saida = calcular(n1,n2,operacao); 

alert(`Resultado da operação ${saida}`);


let usuario = prompt("Digite o nome de usuário");
let senha = prompt("Digite sua senha ");
if((usuario =="gustavo" ||usuario=="ricardo") && senha =="adm123"){
    alert(`Seja bem vindo ${usuario}!! `);
}else{
    alert(`O usuário ${usuario} não existe!`);
}






