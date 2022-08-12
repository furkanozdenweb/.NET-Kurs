import { Component, OnInit } from '@angular/core';
import { MusteriBilgisi } from './musteri';


@Component({
  selector: 'app-musteri',
  templateUrl: './musteri.component.html',
  styleUrls: ['./musteri.component.css']
})

export class MusteriComponent implements OnInit {

  constructor() { }  // Yapı Bloğu methodumuz. Zorunlu kullandığımız alan olmadığı için boş

  musteriAdi: string = "Samet Erdem";  // Bu classta oluşturduğumuz değişkeni view sayfasında görebiliriz.

  musteriler: MusteriBilgisi[] = [];  // Burada bir değişken tanımladık ve MusteriBilgisi[] tipinde olmasını belirttik fakat bu yok şuanda bir typescript sayfası ile oluşturucaz.

  /* ngFor işlemi ile birden fazla elemanı sayfaya yazddırma */

  ngOnInit(): void   // Bu uygulamanın load eventi olarak düşünebiliriz. yani bu component çalıştığı anda bu fonksiyon otomatik olarak çalışır. İlk Method
  {
    this.musteriler = [
      { id: 1, adi: "Samet", yas: 28 },
      { id: 2, adi: "Ahmet", yas: 33 },
      { id: 3, adi: "Mehmet", yas: 28 },
      { id: 4, adi: "Furkan", yas: 24 },
      { id: 5, adi: "Gamze", yas: 24 }
    ]
  }


  /* Event İşlemleri */

  MusteriSecIlk(musteri: MusteriBilgisi) {
    alert("Müşteri Id:"+musteri.id + ", Adı: " + musteri.adi);
  }

  DenemeFonksiyon(){
    alert("Deneme");
  }

  // ngIf işlemi

  secilenMusteri: string | undefined; // Angular 9 da  içerisine değer almayan değişken ve işlemleri tanımlıyoruz.
  MusteriSec(musteri: MusteriBilgisi) {
    this.secilenMusteri = musteri.adi;
  }








}
