export class Post {  // Bir model oluşturuyoruz gelen veriyi tutacağımız. Api ile çalışacağımız zaman anonim çalışmamlıyız yani gelen dataya göre geldiği anda kullanmayın. Any dediğimiz tip ile çalışmamalıyız. Type safe dediğimiz tip güvenli çalışma tekniğiyle çalışın  sürdürülebilir güvenli yazılım yazın. 
    userid: number | undefined;
    id: number | undefined;
    title: string | undefined;
    body: string | undefined;
}