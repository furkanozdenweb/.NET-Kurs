var Sayi = 0  //Değişkene bir değer tanımladık.

while (Sayi <= 100) {  // While döngüsü ile koşul geçerli olduğu sürece dönecek 

    Kalan = Sayi % 2  //Gelen değerin mod 2 sini alarak kalanını değişkene atıyoruz.
    if (Kalan == 1) { // Eğer Kalan Değişkeni 1 e eşit ise yani tek sayı ise if koşulu sağlanıyor ve if 'e giriyor.
        console.log(Sayi)  // Gelen Değeri Ekrana yazdırdık.
    }
    Sayi = Sayi + 1  //Değere +1 Eklettik
}


