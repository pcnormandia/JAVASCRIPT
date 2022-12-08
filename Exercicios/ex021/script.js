let num = document.querySelector('input#fnum') //Criar variavel para capturar os valores digitados no campo input
let lista = document.querySelector('select#flista') //Criar variável para receber os valores válidos digitados
let res = document.querySelector('div#res') //Criar uma váriavel para mostrar os resultados finais
let valores = [] //Criar uma variável do tipo array para receber os valores digitados

function isNumero(n){//Função para validação dos dados: para verificar se o número está entre 1 e 100 e vazia
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){//Função para validação dos dados: não podem repetir no array
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){//Adicionar os valores validos no array
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo OK!')
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }    
}
//limpar o campo dos resultados finais
//Validação de dados: verificar se input está vazia    

//Mostrar os valores do array em um elemento select
//Limpar os dados de análise dos números

//Criar uma variável para receber os resultados     

//Função para analisar os números obtidos na array

//Validação dos dados: mostrar msg alerta caso não haja nenhum valor no array (length==0)
//Contar os valores válidos cadastrados no array
//Verificar o maior valor válido cadastrado
//Verificar o menor valor válido cadastrado
//Realizar a somatória de todos os valores
//Calcular a média dos valores da array