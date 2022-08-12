

function DurumHesapla(OgrenciBilgisi, VizeNotu, FinalNotu) {  //Öğrenci Adını, Vize Notunu ve Final Notunu Fonksiyonda kullanmak üzere tanımlıyoruz.

    var OrtalamaNotu = (VizeNotu + FinalNotu) / 2  //Burada 2 Not Toplanarak 2 ye bölme işlemini yapıyoruz. Ortalamasını almak için

    if (OrtalamaNotu <= 45) {  // İf yapısı ile koşul sağlandığında ifin süslü parantezindeki kodlar devreye girer.
        return "Öğrenci Adı:" + OgrenciBilgisi + " -  Kaldı - Ortalama Notunuz :" + OrtalamaNotu  // Sonucu Ekrana Yazdırıyoruz

    }
    else if (OrtalamaNotu <= 55) { // Else if ile yeni koşul belirlenir ve koşul sağlanırsa süstlü parantezin içindeki kodlar devreye girer.
        return "Öğrenci Adı:" + OgrenciBilgisi + " -  Büte Kaldı- Ortalama Notunuz :" + OrtalamaNotu // Sonucu Ekrana Yazdırıyoruz
    }
    else {  // Koşulun sağlanmaması durumunda Else den sonraki parantezler devreye girerek kodlarımız çalışır.
        return "Öğrenci Adı:" + OgrenciBilgisi + " -   Geçti - Ortalama Notunuz :" + OrtalamaNotu  // Sonucu Ekrana Yazdırıyoruz
    }
}

var Ogrenci1 = DurumHesapla("Samet Erdem", 60, 20) //DurumHesapla Fonksiyonuna Öğrenci Adını, Vize Notunu ve Final Notunu deüerlerinin göndererek sonucu Ogrenci degiskenine alıyoruz.
var Ogrenci2 = DurumHesapla("Ahmet", 20, 90)
var Ogrenci3 = DurumHesapla("Gizem", 80, 90)

console.log(Ogrenci1) //Ekrana Yazdırma
console.log(Ogrenci2) //Ekrana Yazdırma
console.log(Ogrenci3) //Ekrana Yazdırma