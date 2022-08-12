

function MenuGetir(Yiyecek, Icecek, Tatli) {
    return "Menu: Yiyecek:" + Yiyecek + ", İçeceğiniz:" + Icecek + ", Tatlınız: " + Tatli 
}


console.log(MenuGetir("Doner", "Kola", "Sütlaç"))
console.log(MenuGetir("123", "Kola", "Sütlaç"))

var Menu3 = MenuGetir("232", "Kola", "Sütlaç")
var Menu4 = MenuGetir("Don232er", "Kola", "Sütlaç")
console.log(Menu3)
console.log(Menu4)
