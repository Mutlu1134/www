1. Modules diğer programlama dillerindeki kütüphanelere benzer.
2. Core, Third Party ve Local çeşitlerine sahiptir.
3. Third Party module'leri kullanmak için npmjs.com sitesi kullanılabilir. MOdulleri indirmek için Node Package Manager (npm) gereklidir ki bu da Node yüklenince otomatik yüklenmiş olur.
4. bir projeye module yüklemek için `npm install paketadı` Örneği express modulunu indirmek için `npm install express`
    4.1. Silmek için ise `npm uninstall paketadı` yazmalıyız 
5. proje klasöründe node_modules klasörü altında gerekli kaynak kodları indirilir. Eğer node_modules silinirse `npm install` yazarak gerekli dependicies'lerin hepsini tek seferde indirebiliriz.
6. Nodemon (node projelerini kaydettiğinde otomatik yeniden çalıştırır) ve pm2 gibi kod geliştirmeye yardımcı olan modulleri global olarak indirip tüm projelerimizde çalışsın istiyorsak `npm install nodemon -g` yazıyoruz.
7. ES normal JS de kullanılan mantık NodeJS için CommonJS çıkarılmıştı ama artık gerek yok modüller ES mantığına gidiyor.
8. ES mantığıyla import export yapmak için ya import/export yapacağımız dosyaların uzantılarını `.mjs` yapacağız. Ya da `package_json` içine `"type":"module",` ifadesini yazmak yeterli.
9. Express modülü CommonJS ile Node-fetch ES modül mantığı ile çalışıyor.
10. Örnek bir import export yazımı : `import  * as data  from "./Denemeler7_1.mjs";`
11. `export const isimgonder = () => {return "ali"}` veya  `export let yas =29`
12. package.json dosyasında "scripts" altına şu kodu eklersek `"start" : node jsdosyadımız` örneğin `"start" : node index`. Artık terminalden npm start yazdığımızda index.js dosyamızı çalıştırır. Aynı node index.js yazmışız gibi olur.
