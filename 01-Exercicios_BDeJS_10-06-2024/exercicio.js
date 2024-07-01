
let inputs= document.querySelectorAll(".inputs");
let saidas = document.querySelectorAll(".saida");
let btnAcao = document.querySelectorAll(".btn_acao");
let btnLimpar = document.getElementById('limparInput');
let contador = 1;

btnAcao.forEach((btn,i,arr)=>{
    btn.addEventListener('click',() =>{
        if(btn.textContent==="Contar"){
          let valorInputQ1 = parseInt(inputs[0].value);   
            for(let i=valorInputQ1;i>=1;i--){
                saidas[0].innerHTML += i+" ";
                saidas[0].style.background="green";
                saidas[0].style.color="white";
                saidas[0].style.fontWeight="bold";
            };

        }else if(btn.textContent==="Resultado multiplicação"){
            let valorN1=parseInt(inputs[1].value);
            let valorN2=parseInt(inputs[2].value);
            saidas[1].innerHTML = valorN1*valorN2;
            saidas[1].style.background="green";
            saidas[1].style.color="white";
            saidas[1].style.fontWeight="bold";
        }else{
            let valorIdade=Number(inputs[3].value);
            if(valorIdade >=18){
                saidas[2].innerHTML= `Você tem ${valorIdade} anos, portanto é maior de idade`;
                saidas[2].style.background="green";
                saidas[2].style.color="white"
                saidas[2].style.fontWeight="bold"
            }else{
                saidas[2].innerHTML= `Você tem ${valorIdade} anos, portanto é menor de idade`;
                saidas[2].style.background="green";
                saidas[2].style.color="white";
                saidas[2].style.fontWeight="bold";
            }
        }
    });     
});

btnLimpar.addEventListener('click',()=>{
    saidas[0].innerHTML = "";
});