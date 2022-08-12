class Personeller{ //Personelleri 
    PersonelAd="Samet";
    kaydet(){
        console.log("Kayıt Yapıldı.");
    };
}

var personel=new Personeller();
var personel2=new Personeller();
var personel3=new Personeller();
var personel4=new Personeller();


personel.kaydet();

personel2.PersonelAd="Hüsmen";
console.log(personel2.PersonelAd);


class Calisan{
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
    kaydet(){
        console.log("Çalışan Kaydı Yapıldı.");
    };
}

var calisanBilgisi= new Calisan(ad="Samet",soyad="Erdem");


