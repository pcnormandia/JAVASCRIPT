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
        res.innerHTML = '' //Limpar a análise dos números anteriores (função finalizar)
    }else{
        window.alert('Valor inválido ou já encontrado na lista')//Aviso para informar condição inválida
    }
    num.value = '' //Apaga o valor digitado deixando o campo em branco
    num.focus() //Deixa o cursor parado neste elemento html
}
//Função para realizar a análise final dos números
function finalizar(){
    
    if(valores.length == 0){ //Verificar inicialmente se há dados digitados
        window.alert(`Adicione valores antes de finalizar`)
    }else{
        let tot = valores.length //Estabelecer uma variável local com o total de elementos do array
        let maior = valores[0] //Estabelecer inicialmente uma variável local como maior
        let menor = valores[0] //Estabelecer inicialmente uma variável local como menor
        let soma = 0
        let media = 0        
        for(let pos in valores){
            soma += valores[0]            
        if(valores[pos]>maior){
            maior = valores[pos]
        }
        if(valores[pos]<menor)
            menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = "" //Limpar todos os dados anteriores
        res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados.</p>` //Informar o número de valores cadastrados na array
        res.innerHTML += `<p>O maior valor obtido foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor obtido foi ${menor}.</p>`
        res.innerHTML += `<p>A somatória dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
       
}






//Contar os valores válidos cadastrados no array
//Verificar o maior valor válido cadastrado
//Verificar o menor valor válido cadastrado
//Realizar a somatória de todos os valores
//Calcular a média dos valores da array