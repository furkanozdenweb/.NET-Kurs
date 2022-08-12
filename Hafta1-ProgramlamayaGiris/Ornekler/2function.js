
function SayiUret(MaksimumSayi = 49) {
    var Sayi = Math.ceil(Math.random() * MaksimumSayi)  // Burada Math.random fonksiyonuyla 0 ile 1 arasında bir değer belirledim ve onu maksimum sayi ile çarotım 
    return Sayi
}

var Sayi1 = SayiUret(100);
var Sayi2 = SayiUret();
var Sayi3 = SayiUret();
var Sayi4 = SayiUret();
var Sayi5 = SayiUret();
var Sayi6 = SayiUret();

var KuponGoster = "Kuponunuz: " + Sayi1 + " " + Sayi2 + " " + Sayi3 + " " + Sayi4 + " " + Sayi5 + " " + Sayi6

console.log(KuponGoster)