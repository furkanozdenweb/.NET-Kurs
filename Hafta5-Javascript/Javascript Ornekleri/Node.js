
// Node Kullanımı ve içeriğe erişme
var nodeMantigi = document.getElementById("Paragraf1"); 
console.log(nodeMantigi.childNodes[0].nodeValue);  // childnode altındaki yapılara ulaşır.

// Node Elementi oluşturma -appendChild 
var baslik = document.createElement("h2");  // Baslik isminde bir element oluşturduk.
var node = document.createTextNode("Merhaba Web siteme Gelen Kullanıcı !");  // bir node oluşturarak yen bir textnode tanımladık.
baslik.appendChild(node);  // tanımladığımız TextNodu baslik içerisine ekledik.


var divUlas = document.getElementById("div1");  // Div1 'e ulaştı.
var p2Ulas = document.getElementById("Paragraf2"); // P2'e Ulaştı.


// DOM'a ekleme işlemi -insertBefore
divUlas.insertBefore(baslik,p2Ulas);  // divUlas içine Ekle (Eklenecek Değer, Neyden önce ekleneceği.)


//Silme İşlemi - removeChild
alert("Paragraf 2 Siliniyor.");
divUlas.removeChild(p2Ulas);  // Node ile element silme.





// Elementi keserek başka bir element yerine koyabilir.

var p3Ulas = document.getElementById("Paragraf3"); // P3'e Ulaştı.
var ul1Ulas = document.getElementById("Ul1"); // P2'e Ulaştı.

alert("Paragraf Değiştiriliyor.");
divUlas.replaceChild(ul1Ulas,p3Ulas);  // Baslik elementini p3 yerine koyar.
