function carregar() {
    var msg = document.getElementById('title')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML += `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Morning
        img.src = 'img/morning.ico'
    } else if (hora >= 12 && hora <=18) {
        //afternoon
        img.src = 'img/afternoon.ico'
    } else {
        img.src = 'img/night.ico'
    }
}