import { Component } from '@angular/core';


@Component({ // Bu bir declarasyon yani tanım var.  c# taki Attributes gibi çalışır. 
  selector: 'app-root', // HTML Sayfasında kullandığımızda  
  templateUrl: './app.component.html', // Bu companent çalıştığında companentin çekildiği alanda görülecek sayfa budur. View olarak bunu varsayalım. Tarayıcı projesi yaptığımız için client tarafından yani tarayıcılar tarafından erişilebilecke html sayfamız burası.
  styleUrls: ['./app.component.css'] // Çağırılan companente özel stillerim varsa eğer alan web sayfamıza o css sayfasını ekler. Birden fazla css sayfamız var ise virgül ile eklenebilir.
})


export class AppComponent { // Export Başka kompenentler bizim burada oluşturduğumuz classa erişebilir demektir. Bizim expert ettiğimiz temel companentimiz bu - Public gibi düşünebiliriz. 
  title = 'IlkProjem';
  baslik:string ="Samet Erdem";
  memleket:string ="Tekirdağ";
}

//Companent .ts sayfamız bildiğimiz Typescript yani biz typescript kodları ile öğrendiğimiz herşeyi bu sayfada kullanabiliriz. Typescript dökümantasyonu desteklediği için angular öğrenirken zaten bildiğimiz kodlar yer alacağı için işimiz kolaylaşıyor.
