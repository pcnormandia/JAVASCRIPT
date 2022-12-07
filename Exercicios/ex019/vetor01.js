let num=[5,8,2]
num[3]=4
num.push(6)
//mostrar o vetor e seus elementos
console.log(num)
//uso do atributo length (verificar a quantidade de elementos)
console.log(num.length + " elementos")
//uso do atributo sort (colocar em ordem crescente)
console.log(num.sort())
//uso do atributo indexOf()
console.log(num.indexOf(8))

//Quando o valor não existe o atributo retorna -1
let pos = num.indexOf(10)
if(pos = -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}.`)
}
