// Criar uma solução onde a lista Num1 e Num2 são mescladas,
// corrigidas e organizadas.
 let num1 = [10, 20, 30, 40, 50]
let num2 = [90 , 80, 70, 60, 50]
num2.pop();
let novoArray = num1.concat(num2).sort();

console.log(novoArray)

