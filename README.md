# hugoboss-case
Proje çalıştırmak için Nodejs in bilgisayarınızda yüklü olması gerekmektedir.
 projeyi çalıştırmak için aşağıdaki sırayı izleyiniz;
 

    npm install -g json-server`

    npm install

Sonrasında proje dosyasını çalıştırabilirsiniz (`ng serve -o`)

-Kullanılan json dosyası üzerinde dosya path --> `app\src\app\db`

    json-server --watch Order.json

 
Ana ekranda json orderları listelenmektedir.

Orderlar üzerinde düzenleme ve silme işlemleri yapılmaktadır.

Order listesinin üst tarafında 100 datada bir sayfalandırma işlemi yapılmıştır.

Tüm orderlar üzerinde arama işlemi de yapılmaktadır.

Sol sidebar üzerinde Orderları listemek ve yeni order eklemek için routing yönlendirmesi yapılmıştır.

Eklenen yeni bir order, orderların en alt kısmında gösterilmektedir.

Datalar üzerindeki table başlıklarında a-z sıralama işlemi yapılmıştır. İşlemi yaparken farklı bir projenin içerisindeki utils dosyasından yararlandım.

