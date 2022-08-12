/* 

// 1. Fonksiyon Kullanımı 
function merhabeDe() {
    return "Merhaba 1";
}
// 2. Fonksiyon Kullanımı 
const merhabeDe2 = () => {
    return "Merhaba 2";
}

// 3. Fonksiyon Kullanımı 
const merhabeDe3 = () => console.log("Merhaba 3");

// 4. Fonksiyon Kullanımı 
const merhabeDe4 = (isim) => {
    console.log("Merhaba 4 "+isim);
}

var Element1 = document.getElementById("icerik")
Element1.innerHTML = merhabeDe();
var Selam2= merhabeDe2();
console.log(Selam2);
merhabeDe3();
merhabeDe4("Samet");


//forEach kullanımı

let hayvanlar = ["Köpek","Kedi","Balık","Fil"];

hayvanlar.forEach( hayvan =>{
    console.log(hayvan);
})
*/




// This kullanımı - This nedir?

console.log(this);


window.alert("Merhaba2");
this.alert("Merhaba3");
alert("Merhaba");

const Urun ={
    ekle: function (){
        console.log(this);
    }
}

Urun.ekle();