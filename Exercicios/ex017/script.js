function contar(){
    //Estabelecendo variaveis locais para coleta de dados na forma de texto
    let inicio = window.document.getElementById('idinicio')
    let fim = window.document.getElementById('idfim')    
    let passo = window.document.getElementById('idpasso')    
    let res = window.document.getElementById('res')
    // Estabelecendo uma janela de alerta devido ausência de dados críticos. 
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro!] Dados faltando...')
        res.innerHTML = 'Impossível contar!'
    }else{
        //Estabelecendo variaveis locais para inicio, fim e passo com conversão para números
        res.innerHTML = "Contando...<br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Estabelecendo mensagem de alerta para passo valor zero ou negativo
        if(p<=0){
            window.alert('Impossível contar! Considerando passo com valor 1')
            p = 1
        }
        if(i<f){
            //Repetição com variável de controle para Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`      
            }  
        }else{
            //Repetição com variável de controle para Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`      
            } 
        }         
    }res.innerHTML += `\u{1f3c1}`//icone de bandeira final
    
}