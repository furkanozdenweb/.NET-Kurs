/*
For Döngüsünde;
Parantezin içindeki ilk alan değişken tanımlar
Noktalı virgülden sonraki 2. alan KOŞUL belirtir. Koşul sağlandığı sürece döngü devam eder.
Noktalı virgülden sonraki 3. alan ise Sayının kaç kaç artacağını belirtir.
*/

for (i = 0; i <= 100; i++) {
    Kalan = i % 2 // Gelen değerin 2 ye göre modunu alarak kalanı buluyoruz
    if (Kalan == 0) { //Eğer Kalan Değişkeni 1 e eşit ise yani tek sayı ise if koşulu sağlanıyor ve if 'e giriyor.
        console.log(i)  // Ekrana Yazdırma.
    }
}
