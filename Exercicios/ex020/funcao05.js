//Recursividade - a função é chamada dentro da própria função
function fatorial(n){
   if(n==1){
        return 1
   } else{
        return n * fatorial(n-1)
   }
}
console.log(fatorial(5))