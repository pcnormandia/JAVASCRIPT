function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = window.document.getElementById('idano').value
    var res = window.document.querySelector('div#res')
    if(anoNasc.length == 0 || anoNasc > anoAtual){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsexo')
        var idade = anoAtual - anoNasc
        res.innerHTML = `Idade ${idade}`
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = "masculino"
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/adolescente_h.jpg')
            }else if(idade<50){
               img.setAttribute('src', 'imagens/homem_adulto.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else{
            genero = "feminino"
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if(idade<21){
                img.setAttribute('src', 'imagens/adolescente_f.jpg')
            }else if(idade<50){
                img.setAttribute('src', 'imagens/mulher_adulta.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}