

function ToplamaIslemi(){
    var gelenSayi1 = document.getElementsByName("Sayi1"); 
    var Sayim1=parseInt(gelenSayi1[0].value);
    var gelenSayi2 = document.getElementsByName("Sayi2"); 
    var Sayim2=parseInt(gelenSayi2[0].value);

    var Son = document.getElementsByName("Sonuc"); 
    console.log(Son[0]);
    Son[0].value=Sayim1+ Sayim2;
}

var IslemToplama = document.getElementById("ToplamaButton");
IslemToplama.addEventListener("click",ToplamaIslemi);
//ToplamaIslemi();
