var VizeNotu = 50  // Vize notunu değişkene atıyoruz.
var FinalNotu = 50 // Final notunu değişkene atıyoruz.

var OrtalamaNotu = (VizeNotu + FinalNotu) / 2  //Burada 2 Not Toplanarak 2 ye bölme işlemini yapıyoruz. Ortalamasını almak için

if (OrtalamaNotu <= 51) {  // İf yapısı ile koşul sağlandığında ifin süslü parantezindeki kodlar devreye girer.
    console.log("Kaldı - Ortalama Notunuz :" + OrtalamaNotu) // Sonucu Ekrana Yazdırıyoruz
}
else if (OrtalamaNotu <= 55) { // Else if ile yeni koşul belirlenir ve koşul sağlanırsa süstlü parantezin içindeki kodlar devreye girer.
    console.log("Büte Kaldı - Ortalama Notunuz :" + OrtalamaNotu) // Sonucu Ekrana Yazdırıyoruz
}
else {  // Koşulun sağlanmaması durumunda Else den sonraki parantezler devreye girerek kodlarımız çalışır.
    console.log("Geçti - Ortalama Notunuz :" + OrtalamaNotu)  // Sonucu Ekrana Yazdırıyoruz
}
