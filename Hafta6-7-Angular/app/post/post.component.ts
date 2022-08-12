import { Component, OnInit } from '@angular/core';
import { Post } from './post';  // Oluşturdğumuz  classı çağırıyoruz. 
import { HttpClient } from '@angular/common/http';  //HttpClientModüle ile kullanarak datalara erişim salayacağız.

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }  // Yapı Denetimi fonksiyonuna "Private http:HttpClient" ile HttpClienti tanımlamalıyız. Enjekte etmeliyiz. 

  veriYolu: string = "https://jsonplaceholder.typicode.com/posts";  // Verileri alacağımız json un bağlantı yolunu alıyoruz.


  degerler: Post[] | undefined; // Oluşturdğumuz  classı referans olarak gösteriyoruz.ve bir dizi değişken tanımlıyoruz.

  ngOnInit(): void { // Sayfa yüklendiği anda çalışır.
    // this.http ile http  worklerini kullanabiliyoruz. Yani httpClient ile gelen fonksiyonları kullanabiliyoruz artık.
    
    // .get fonksiyonu ile  adres çuğbuğundaki url sini vererek sayfa  içeriğine erişebiliriz. Normal de adres çubuğuna bişey yazarsanız da get yapmış olursunuz. Kolayca bu şekilde düşünebilirsiniz.

    // <Post[]> Post Array türünde biz verileri istiyoruz demek.  Bunu post.ts sayfasında tanımlamıştık zaten.

    // () Parantez içinde get ile hangi url erişeceğimizi yazıyoruz. 

    // Get request işlemi yapılabilmesi için .subscribe olması gerekli. İşlemi çalıştırır ve sonucunda bize bilgi verir. Hata mı? Datalar geldi mi? bir ortam ve dönüş sağlar. Gelen giden datayı izleme özelliği mevcuttur.

    // response gelen detayı alır ve => fonksiyonu ile gelen response işlemini posts değişkenine atar. Artık Posts Dizi değişkenine sayfadan gelen tüm json dataları eklenmiş oldu. *ngFor ile sayfamızda bu datalarda gezebiliriz.
    this.http.get<Post[]>(this.veriYolu).subscribe(response=>{
      this.degerler=response
    });
  }

}
