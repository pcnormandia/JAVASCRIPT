function calcular(){
    let num = document.getElementById('txtn')    
    let tab = document.getElementById('seltab')
   
    if(num.value.length == 0) {
        window.alert('[Erro!] Por favor digite um número')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while(c<=10){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }  
    }
}