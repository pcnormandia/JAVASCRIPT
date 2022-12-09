let num = document.querySelector('input#fnum') //Criar variável para capturar os valores digitados no campo input
let lista = document.querySelector('select#flista') //Criar variável para receber os valores válidos digitados
let res = document.querySelector('div#res') //Criar uma váriavel para mostrar os resultados finais
let valores = [] //Criar uma variável do tipo array para receber os valores digitados

//Função para validação dos dados: para verificar se o número está entre 1 e 100 e vazia
function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
//Função para validação dos dados: verificar que os dados não estão repetidos
function inLista(n, l){
    if(l.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}
//Função para validar os dados e adicionar valores a lista
function adicionar(){
    //Desvio condicional para validação dos dados
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))//Adicionar os valores validos no array
        let item = document.createElement('option') //Criar um novo item como uma variável para incluir cada valor válido 
        item.text = `Valor ${num.value} adicionado` //Definir o texto de cada item que será adicionado
        lista.appendChild(item) //Incluir cada valor como um item na lista
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Apaga o valor digitado deixando o campo em branco
    num.focus() //Deixa o cursor parado neste elemento html
}

function finalizar(){
    
    for(let c in valores){
        if(c==0){
            let maior = valores[0]
        }else if(valores[c]>maior){
            maior = valores[c]
        }
    }
    res.innerHTML = `O maior valor obtido foi ${maior}`
}

//limpar o campo dos resultados finais

//Limpar os dados de análise dos números



//Função para analisar os números obtidos na array

//Contar os valores válidos cadastrados no array
//Verificar o maior valor válido cadastrado
//Verificar o menor valor válido cadastrado
//Realizar a somatória de todos os valores
//Calcular a média dos valores da array