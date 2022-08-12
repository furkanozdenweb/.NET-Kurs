// İlk Örnek Typescript Anlayalım.
console.log(" ------------------------------------------------------------------------------------");
function selamVer(GelenIsim, GelenSoyad) {
    return "Merhaba " + GelenIsim + " " + GelenSoyad;
}
var Sunum = selamVer('Samet2 ', 'Erdem'); //Fonksiyon çağırma
console.log(Sunum);
//Sayısal Veri tipi
console.log(" ------------------------------------------------------------------------------------");
var sayi; //tipi sayı olan dizi tanımlanması
sayi = 34342;
console.log(sayi);
//Sayısal veri tipine sahip dizi değişken oluşturma
console.log(" ------------------------------------------------------------------------------------");
var sayilar = [23, 2, 3, 1, 23]; //Tipi sadece sayısal ifadeler olabilen dizi tanımlanması.
console.log(sayilar);
// Birden fazla tip özelliği taşıyan değişken oluşturma
console.log(" ------------------------------------------------------------------------------------");
var dizi = [12, "İstanbul"]; // Bir adet sayı ve bir adet metinsel ifadeden oluşan bir dizi oluşturur.
console.log(dizi);
//enum Değişken Tipi
console.log(" ------------------------------------------------------------------------------------");
var Ayarlar;
(function (Ayarlar) {
    Ayarlar["IpAdres"] = "192.168.1.1";
    Ayarlar["Tema"] = "Dark";
    Ayarlar["Surum"] = "1.2";
})(Ayarlar || (Ayarlar = {})); // Typescript ile gelen en güzel veri tipi Enum - Süistimal edilmemeli. ! 
var ayarBilgisi = Ayarlar.IpAdres; // Ayarlar Enum'undaki IpAdres bilgisini çektik.
console.log(ayarBilgisi);
/*










// Any Değişken Tipleri
console.log(" ------------------------------------------------------------------------------------");
let deger : any= "Ankara"; // Any bizim dışarıdan değer alıdğımızda gelecek veri tipini bilmediğimizde kullandığımız veri tipidir. String, integer, decimal değerler alabilir.
deger=2;
deger=true;
console.log(deger);



















//Void Kullanımı Nedir?
console.log(" ------------------------------------------------------------------------------------");
function IslemYap():void { // Fonksiyon içerisinden geri dönüş yapılmayacak ise void tipi kullanılır.
    console.log("Merhaba")
}

//  undefined  ile  null
















//Geri dönüş yapacağımız veri tiplerini belirttiğimiz fonksiyonlar
console.log(" ------------------------------------------------------------------------------------");
function Toplasana (x,y){
    return x+y;
}
function Toplasana2 (x:number,y:number):number{  // değişkenlerin tiplerini ve son olarak geri dönüş yapacağımız veri tipini belirtiyoruz.
    return x+y;
}














// Default değere sahip fonksiyonlar
console.log(" ------------------------------------------------------------------------------------");
function ToplasaDefault (x:number,y:number=10):number{  // değişkenlerin tiplerini ve son olarak geri dönüş yapacağımız veri tipini belirtiyoruz.
    return x+y;
}
console.log(ToplasaDefault(5));

















//  Undefined fonksiyonlar
console.log(" ------------------------------------------------------------------------------------");
function ToplaUndefined (x:number,y?:number):number{  // değişkenlerin tiplerini ve son olarak geri dönüş yapacağımız veri tipini belirtiyoruz.
    if(y){ // Y Tanımlı ise yani Null değil ise.
        return x+y;
    }else{
        return x;
    }
}
console.log(ToplaUndefined(5));  // Ekrana Yazdırma

















//Dizi Fonksiyonu oluşturmak
console.log(" ------------------------------------------------------------------------------------");
function DavetEt (ilkDavetli:string, ...digerDavetliler: string[]):string{  // ... Özelliği ile bir dizi değere sahip olabileceğini belirtiyoruz.
   return "İlk Davetli: "+ ilkDavetli + " - Diğer Davetliler: " + digerDavetliler;
}
console.log(DavetEt("Samet","Ahmet", "Furkan", "Mehmet", "Gamze"));  // Ekrana Yazdırma















// Class Kullanımı Detaylı
console.log(" ------------------------------------------------------------------------------------");
class EvBilgisi{  //Classlar referans tiplerdir.  Biz bu classları kullanabilmek için aynen HTML elementlerini atadığımız gibi bir yapıcı blok oluşturabiliriz.
    _EvAdi:string;  // _ alt çizgi kullanmamızın amacı burada this. ile ulaşabileceğimiz alanların yapıcı blok olmadığını belirtmek.
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(EvAdi:string, odaSayisi:number, pencereSayisi:number, Kat:number){ //Yapıcı Blokları tanımlıyoruz.
        this._EvAdi=EvAdi;
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = Kat;
    };
    eviTemizle(){
        console.log(this._kat+". Kattaki, '" + this._EvAdi+ "' isimli evdeki, "+this._odaSayisi+" adet oda temizlendi ve "+ this._pencereSayisi +" pencere silindi.");
    };
}

let Ev1=new EvBilgisi("Samet Evi",3,12,3); // Referans olarak EvBilgisi classımızı kullanıyoruz ve Yapıcı bloklar ile Ev1 nesnesini oluşturuyoruz.
Ev1.eviTemizle(); //Ev1 nesnesinin içindeki fonksiyonu çağırdık.















// İnheritance - Miras ve Değişken scope tanımlamaları "Private","public", "protected" Kullanımı
console.log(" ------------------------------------------------------------------------------------");
class kayitIslemi{  // kayitIslemi isimli class oluşturma buna extends ile miras alma için kullıncaz
    private degisken1="değer1"; // Private değerler sadece tanımlandığı class içinde kullanılabilir.
    public degisken2="değer2";  // Class dışında da kullanılabilen değerler.
    protected degisken3="değer3"  // Hem tanımlandığı classta hemde extends ile miras olarak alınan classlarda kullanılabilir.
    kaydet(){ // Kişi classı içindeki fonksiyona erişme
        console.log("Kayıt Edildi.");
        this.degisken1="Samet";
    }
}

class Musteri extends kayitIslemi{  // Müşteri classını oluşturduk extends ile kayıt işleminden miras olarak gösterdik
    satisYap(){
        console.log("Satış Yapıldı");
        this.degisken3="Samet"; // Protected olarak tanımlanan class içerisindeki değer miras olarak gösterilen diğişkenlere erişebiliriz.
    }
}

class Personel extends kayitIslemi{ // Personel classını oluşturduk extends ile kayıt işleminden miras olarak gösterdik
    maasOde(){
        console.log("Maaş Ödendi");
    }
}

let musteri = new Musteri(); // Referans olarak Müşteri classını kullanıyoruz.
musteri.kaydet();  // Miraz alınan class içindeki tüm özellikler kullanılabilir.
musteri.satisYap();  // Müşteri classının içindeki özelliklere ve fonksiyonlara erişebiliriz.
musteri.degisken2="Samet"; //Public olarak tanımlanan değişkene heryerden erişebiliriz.

let personel= new Personel();  // Referans olarak Personel classını kullanıyoruz.
personel.kaydet(); // Miraz alınan class içindeki tüm özellikler kullanılabilir.
personel.maasOde(); // Müşteri classının içindeki özelliklere ve fonksiyonlara erişebiliriz.
























// Getter ve Setter Kullanımı  -- Kabsülleme Yani bir Değişken doldurulurken ve ekrana verilecekken otomatik olarak başına bir ifade eklemek istiyorsak Örneğin; "Sayın, ", "Bay ", "Bayan ", "Merhaba " vb. yada Farklı işlemler yaparak geri dönüşünü sağlıyoruz. Veritabanına ekleme, düzenleme, silme vb.

console.log(" ------------------------------------------------------------------------------------");

class kayitYap{  // Get ve Set kullanımı yapacağımız kayitIslemi2 isimli classı oluşturuyoruz.
    private _isim:string; // Private değerler sadece tanımlandığı class içinde kullanılabilir.
    
    get isim():string{  // get yani oku fonksiyonu ile değeri alıp dönüş sağladık.
        return "Sayın : " + this._isim // Başına Sayın Ekletiyoruz.
    }
    set isim(ad:string){  // Set ile bu class içine bir isim gönderdiğimizde Gönderim Şekli "musteri.isim='Samet';" gibi önce set edilecek ve sonrasında get ile geri dönüş sağlanacak.
        this._isim = ad
    }
    kaydet(){ // Kişi classı içindeki fonksiyona tanımlama
        console.log(this.isim); //İsmi get ederek bir değer okutoyruz ve set ile geri dönüşünü sağlıyoruz.
    }
}

let kayit1= new kayitYap(); //kayit1 diye bir nesne oluşturuyoruz ve kayıtIslemi2 classını referans olarak gösteriyoz.
kayit1.isim="Samet"; // kayit1 nesnesine isim
console.log(kayit1.isim) ;


















//Abstract Sınıflar ve Kullanımı  Kendi başlarına kullanılamaz ve ancak miras verme yöneti ile kullanılabilen sınıflardır. Ayrıca miras olarak alınan classlar tarafından zorunlu olarak abstract değerleri gönderilmek zorundadır.
console.log(" ------------------------------------------------------------------------------------");
abstract class KrediIslemi {
    constructor(OrnekBisey:string){

    };
    KrediyiKaydet():void{
        console.log("Kaydedildi.");
    };
    abstract Hesapla():void;   // << Abstrack classlarda kullanılan abstractlar imza olarak tanımlanır. Bu alanlar extends olarak miras alınan classlardan zorunlu olarak gönderilmelidir. Yoksa sistem hata verir. kodlar derlenmez.
}


class TuketiciKredi extends KrediIslemi{
    constructor (){
        super("bişeye değer gönder"); // Bu ifade ile parametresiz olarak gönderilirsa constructor bu ifade yer alamlı. Eğer tapısal eğer yapısal blokta bişey tanımlamıyorsak super() olarak gönderim sağlanacak.
    }
    Hesapla(): void { // Abstrack alan olduğu için bu classın içinde zorunlu olarak bu fonksiyonu göndermemiz gerekmekte.
        console.log("Tüketici kredisine göre işlem yapıldı.");
    }
}

class KonutKredisi extends KrediIslemi{
    constructor (){
        super("bişeye değer gönder"); // Bu ifade ile parametresiz olarak gönderilirsa constructor bu ifade yer alamlı. Eğer tapısal eğer yapısal blokta bişey tanımlamıyorsak super() olarak gönderim sağlanacak.
    }
    Hesapla(): void {
        console.log("Konut Kredisine göre işlem yapıldı.");
    }
}

let tuketiciKredi1= new TuketiciKredi();
tuketiciKredi1.Hesapla();

let konutKredisi1= new KonutKredisi();
konutKredisi1.Hesapla();

let kredi : KrediIslemi; // Biz burada kredi değişkenine tip olarak konut kredisi classını yada tuketici kredisini classını alabileceğini belirtiyoruz. ona göre işlem yapılacak alanları gönderimini sağlıyoruz.
kredi = new KonutKredisi();
kredi = new TuketiciKredi();




























//interfaces Classlarının kullanımı Sadece Arayüz demek ve tanımlanmamış imzalar barınabilir içerisinde işlem yapmıyoruz.  Tüm bilgiler zorunlu olarak alınacak ise interface kullanımı sağlanır.  Burada oluşturduğumuz sınıfları fonksiyon için değer alırken kullanabiliriz.
 console.log(" ------------------------------------------------------------------------------------");
interface IUrunBilgileri { // interface olarak tanımlanan IUrunBilgileri classı İçinde bulunan bütün değerleri zorunlu olarak boş bırakılmadan tanımlanmak zorunda olan alanlar için kullanıyoruz ve başına interface olduğu için büyük I ekliyoruz.
    id: number;
    urunAdi: string;
    urunFiyati: number;
}

function kaydet(urunBilgileri: IUrunBilgileri) {
    console.log(urunBilgileri.id + " Id li " + urunBilgileri.urunAdi + " Ürün fiyatı " + urunBilgileri.urunFiyati + " kaydedildi.");
}

kaydet({ id: 1, urunAdi: "Bilgisayar", urunFiyati: 100 }); //Eksik tanım gönderilirse hata verir. Zorunlu olmayan alanlar varsa interface ler normal classlara çevrilebilir.



















//  Generic Kullanımı  - Açıklama: Siz bir veritabanından yada farklı bir apiden data alıyorsunuz fakat gelen datanın türünün ne olduğunu yada formatını bilmiyorsanız bu tarz sınıflar kullanabiliriz.
console.log(" ------------------------------------------------------------------------------------");


// Mantık öğrenimi için basit bir fonksiyonla
function GetirBana(x: number): number {
    return x;
}
let Bisey1 = GetirBana(10); // Bu alan ile sadace sayı gönderimi numaric değer gönderimi yapabiliriz. Fakat biz string değer de göndermek istiyoruz. hem integer hem string gönderebilmek istiyoruz. Bunun için aşağıdaki gibi bir kullanım kullanılabilir.


function GetirBanaBelirsiz<T>(x:T):T{  // Biz "T" isimli bir tip tanımladık aynı değşiken gibi bu T Zorunlu değil gelen değerin Type ile bu T değeri dolar.
    return x;
}

let  Bisey2=GetirBanaBelirsiz<number>(5);  // Kullanım Sırasında <number> içersiinde biz kendi değişken tipimizide gönderebiliriz.
let  Bisey3=GetirBanaBelirsiz<string>("Samet"); // Kullanım Sırasında <string> içersiinde biz kendi değişken tipimizide gönderebiliriz.

console.log(Bisey2);
console.log(Bisey3);


// Classlarda Generic Kullanımı.
class GenericClass<T>{
    degisken:T;
    function (parametre :T):T {
        return parametre;
    }
}
let sinif = new GenericClass<number>();  // Classa GenericClass<number> diyerek referans gösterme sırasında numberı gönderim sağladık.
console.log(sinif.function(5));

















// Typescript  için  2 Temel Döngü Yapısı
console.log(" ------------------------------------------------------------------------------------");


let sehirler = ["Tekirdağ", "İstanbul", "İzmir"];

for (let i in sehirler){
    console.log(i);     // İ değişkeni  İndex Değerini Alır
}

for (let i of sehirler){
    console.log(i);    // İ değişkeni  Metinsel (String ) Değerini Alır
}*/
