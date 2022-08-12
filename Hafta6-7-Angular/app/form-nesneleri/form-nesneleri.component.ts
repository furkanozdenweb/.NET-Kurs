import { Component, OnInit, Input } from '@angular/core'; // Eğer input üzerinden data alabilecek isek virgül ekleyerek "Input" ekliyoruz.

@Component({
  selector: 'app-form-nesneleri',
  templateUrl: './form-nesneleri.component.html',
  styleUrls: ['./form-nesneleri.component.css']
})
export class FormNesneleriComponent implements OnInit {

  constructor() { }
  @Input() sehir:string |undefined; //App companent üzerinden parametre olarak alıcaz demek. Üst companent üzerinden veri alabiliriz bunun için @Input() ile tanımlama yapmalıyız.
  ngOnInit(): void { 
  }

}
