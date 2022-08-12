
/* #####################################
 document.getElementById << KULLANIMI
 #####################################
*/ 


/*
var Element1=document.getElementById("intro1"); // ID'si intro1 olan elementin tüm özelliklerini "Element1" değişkenine atar.

//console.log(Element1); // Element1 in tüm yapısal özelliklerini ekrana yazdırır.

//alert(Element1.innerHTML);  //Element1 in innerHTML (İçinde bulunan metinsel ifadeleri ekrana yazdırır.)

var Element2 = document.getElementById("intro2"); //// ID'si intro2 olan elementin tüm özelliklerini "Element2" değişkenine atar.

Element2.innerHTML=Element1.innerHTML;  // Element2 nin innerHTML özelliğine yani içine metinsen ifade olarak Elemen1 in içeriğini ekler. 
*/

/*
var musteriAdim = document.getElementById("MusteriAdi");  // input type="text" olan form elementinin  tüm özelliklerini musteriAdim değişkenine tanımlıyoruz.

console.log(musteriAdim.value);  // inputtan aldığımız özelliklerin .value değerine ulaşarak ekrana yazdırıyoruz.

alert("Hoşgeldiniz: " + musteriAdim.value) // inputtan aldığımız özelliklerin .value değerine ulaşarak  alert ile ekrana yazdırıyoruz.

*/


 /* #####################################
 document.getElementsByTagName << KULLANIMI
 #####################################
*/ 
/*
    var tumListeler = document.getElementsByTagName("ul");  // Sayfamızdaki ul taglerini tumListeler deişkenine tanımlıyoruz. Birden fazla tag bilgisi geleceği için tumListeler dizi değişkeni oluyor.
    //console.log(tumListeler[0]);  //İndex değeri 0 olan dizinin özellikleri ekrana yazdırıyor 

    var TumElemanlar=tumListeler[0].getElementsByTagName("li");  //index değeri [0] olan dizi değişkenin içerisinde li taglerini TumElemanlar değişkenine atıyor ve dizi değişkeni oluyor.
    //console.log(TumElemanlar);

    //console.log(TumElemanlar[0].innerHTML);  //İndex değeri 0 olan dizinin innerHTML  yani metinsel özelliklerini ekrana Yazdırma

     var ElemanSayisi=TumElemanlar.length;

     console.log(ElemanSayisi);


     for (i=0;i<ElemanSayisi;i++){
        console.log(TumElemanlar[i].innerHTML);
     }
     */



  /* #####################################
 document.getElementsByClassName << KULLANIMI
 #####################################
*/ 

/*
 var classElemanlari= document.getElementsByClassName("ArkaplanMavi"); // Classı "ArkaplanMavi" olan tüm tag elemenlarının özellikklerini alır. dizi deişken oluşturuyor birden fazla olduğu için.
 console.log(classElemanlari);  // Ekrana dizi değişkenin tüm özelliklerini yazdırır
 console.log(classElemanlari[1].innerHTML);  // 1. endeks e sahip olan elemanın innerHTML metinsel özelliğini ekrana yazdırdık.

*/

  /* #####################################
 document.querySelectorAll << KULLANIMI
 #####################################
*/ 
/*
     var queryElemanlari= document.querySelectorAll("p.ArkaplanMavi");  // p Taginin içindeki class name ArkaplanMavi olanları alır.
    console.log(queryElemanlari);  // Ekrana dizi değişkenin tüm özelliklerini yazdırırx
    console.log(queryElemanlari[1].innerHTML);  // 1. endeks e sahip olan elemanın innerHTML metinsel özelliğini ekrana yazdırdık
*/

      /* #####################################
 document.getElementsByName << KULLANIMI
 #####################################
*/ 


/*
var gelenDeger= document.getElementsByName("adi");  //Name 'i adi olan input değerinin tüm özelliklerini gelenDeger isimli değişkene atar.
console.log(gelenDeger[0].value); //index değeri 0 olan değerin valuesini ekrana yazdırır.

*/


/*
function TiklanincaCalis(){
    var yazarDegeri= document.getElementById("Yazar");
    yazarDegeri.innerHTML += " Tıklandı <br>";
}

function UzerineGelince(){
    var yazarDegeri= document.getElementById("Yazar");
    yazarDegeri.innerHTML += " Üzerine geldi <br>";
}

function UzerinenGitti(){
    var yazarDegeri= document.getElementById("Yazar");
    yazarDegeri.innerHTML += " Üzerinden gitti<br>";
}

var EventDene = document.getElementById("EventOrnek");

//EventDene.addEventListener("click", function() { alert("samet") } );

EventDene.addEventListener("click",TiklanincaCalis);
EventDene.addEventListener("mouseover",UzerineGelince);
EventDene.addEventListener("mouseout",UzerinenGitti);

*/


