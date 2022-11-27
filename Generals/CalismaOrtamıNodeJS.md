## Node JS Çalışma Ortamı Hazırlama
1. Proje geliştirirken lazım olan aşağıdaki modüller indirilir.
```
npm init
npm install prettier
npm install --save-dev nodemon
node install ejs
node install express --save
```
Aşağıdaki extensionlar indirilebilir.
```
prettier ,
EJS language support, Ejs yazımında yardımcı olması için
```
2. Git hub için gerekli repo açılır ve ilklendirme ayarları yapılır.
```
Detayları github sayfasında var.
```
3. Gerek duyulursa .gitignore dosyası internetten/github'tan indirilir.

4. package.json dosyasına aşağıdaki eklemeler yapılır.
```
"type": "module"
scripts içine;
"start" : "nodemon app.js"
```
5. Statik dosyalarımızı (css, img, video, js, fontawesome vs) `public` klasörü altına topluyoruz.
6. HTML dosyalarını `view` klasörü altına topluyoruz.
7. Temlete app.js dosyamız aşağıdaki gibi olmalı.
```
import express from "express";
const app = express();
const port = 8000;

app.listen(port, () => {
	console.log(`Server has been started on ${port} port`);
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTING
app.get('/', (req, res) => {
	res.render('../view/index.ejs'); 
});
``` 
8. HTML dosyalarının uzantısını .ejs olarak değiştiriyoruz. header, nav, footer kod bloklarını kesiyoruz  `view/partials` altında `_header.ejs` gibi dosyalara kaydediyoruz. Kodları kestiğimiz yere 
`<%- include("./partials/_header.ejs")  -%> ` gibi ejs kodları yazıyoruz.
9. Son olarak terminale `npm start` yazarak nodemon'u çalıştırabiliriz. 

