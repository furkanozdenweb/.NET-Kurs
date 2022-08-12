import { NgModule } from '@angular/core'; // Başka modülleri kullanacak isek import ile çekiyoruz.
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';  // HttpClientModule import ediyoruz.

import {  Routes , RouterModule} from '@angular/router'; //Router Yönlendirici kullanabilmek için yönlendirici modüllerini import ediyoruz.




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusteriComponent } from './musteri/musteri.component';
import { FormNesneleriComponent } from './form-nesneleri/form-nesneleri.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { InputComponent } from './input/input.component';


const routes : Routes=[
  {path:"posts", component:PostComponent}, // adres çubuğunda posts yazması durumunda hangi componentin çalışacağını belirtiyoruz.
  {path:"", redirectTo:"posts",pathMatch:"full"}, //Eğer ana sayfa ise posts componentine yönlendirme yaptık.
  {path:"users", component:UsersComponent},  //users ise users componenti çalışacak.
  {path:"users/:userid", component:UsersComponent} // adres çubuğunda posts yazması durumunda hangi componentin çalışacağını belirtiyoruz.
]

@NgModule({ // Modüller uygulamayı modüler olarak geliştirmemiz gerektiğinden burada NgModül declarasyonunun içinde bu modülün içerisinde kullanılan componentleri listelediğimiz yer. Biz yeni bir component eklediğimizde otomatik olarak buraya ekleniyor. Biz bu alana tanımladığımız declarations altındaki componentleri bu modülün içerisindeki diğer componentlerde de kullanabilirim demek.
  declarations: [
    AppComponent,
    MusteriComponent,
    FormNesneleriComponent,
    NavComponent,
    UsersComponent,
    PostComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // HttpClientModule import ediyoruz. Apiler ile dış kaynaklardan içerik alacağımız zaman uzak sunucudan alacağımız dataları Angular ile çağırır ve işlem yaparız. Bunun için HttpClientModule modülünü kullanıyoruz. Kendi modülümüz içerisinde başka modüller kullanabiliriz. c#taki using işlemi gibi...
    RouterModule.forRoot(routes)//Yukarıda const ile tanımlanmış olan routers ile tanımlanmış alana göre forRoot fonksiyonumuzu çalıştırdık. Bu sayede adres çubuğndaki içeriklere göre yönlendirme sağlanacak.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
