//Função utilizando o parâmetro formal n
function parimpar(n){
    if(n%2==0){
        return 'par!'
    }else{
        return 'impar!'
    }
}

//Apresentação do resultado através de uma variavel e do console
let res = parimpar(3)
console.log(res)

//Apresentação do resultado direto no console
console.log(parimpar(4))