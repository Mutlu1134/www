// document.getElementById("pid1").innerHTML =
//   "<p> <b> Math.PI: </b>" +
//   Math.PI +
//   "</p>" +
//   "<p> <b> Math.sqrt(64): </b>" +
//   Math.sqrt(64) +
//   "</p>" +
//   "<p><b>Math.ln2 : </b>" +
//   Math.LN2 +
//   "</p>";

// let x = Math.random() * 10;

// document.getElementById("pid2").innerHTML =
//   "<p>x : " +
//   x +
//   "</p>" +
//   "<p> ceil(x) : " +
//   Math.ceil(x) +
//   "</p>" +
//   "<p> round (x) : " +
//   Math.round(x) +
//   "</p>" +
//   "<p> trunc(x) : " +
//   Math.trunc(x) +
//   "</p>" +
//   "<p> floor(x) : " +
//   Math.floor(x) +
//   "</p>";

// let yasi = 2;

// let buyukmukucukmu = yasi < 18 ? "Cok kucuk" : "OK buyuk";

// console.log(buyukmukucukmu);

// let x = 10;
// let y = 5;
// alert(y > x);

// let x = 222;

// switch (x) {
//   case 1:
//     alert(1);
//     break;
//   case 2:
//     alert(2);
//     break;
//   default:
//     alert("baska");
//     break;
// }
//------------------------------------------------------
// const array1 = ["Elmt1", "Elmt2", "Elmt3", "Elmt4"];

// const object1 = { E1: "Elmt1", E2: "Elmt2", E3: "Elmt3", E4: "Elm4" };
// for (let index = 0; index < array1.length; index++) {
//   const element = array1[index];
//   console.log(element);
// }

// for (const key in object1) {
//   if (Object.hasOwnProperty.call(object1, key)) {
//     const element = object1[key];
//     console.log(element);
//   }
// }

// for (const key in array1) {
//   const element = array1[key];
//   console.log(element);
// }

// array1.forEach(fonksiyonagonder);

// function fonksiyonagonder(x) {
//   console.log(x);
// }

// for (const iterator of array1) {
//   console.log(iterator);
// }

// let i = 0;
// while (i < 20) {
//   console.log(i);
//   i++;
// }

// let item = document.querySelector("ul#list>li:last-child");
// console.log(item);
// item.innerHTML = "Degisti";

// let itemFirst = document.querySelector("ul#list>li:first-child");
// console.log(`İlk eleman ${itemFirst.innerHTML}
// Son eleman ${item.innerHTML}`);

// let ulDOM = document.querySelector("ul#list");
// let liDOM = document.createElement("li");

// liDOM.innerHTML = `Kendi oluşturup sona eklediğim öge`;

// ulDOM.append(liDOM); // append SON öğeye ekler

// ulDOM.prepend(liDOM); // prepend en BAŞA öğe ekler.

//  CLASS EKLEME
// let idBir = document.querySelector("p#pid1");
// idBir.classList.add("text-primary");
// idBir.classList.add("title");
// console.log(idBir.classList);

// idBir.classList.remove("title");

// console.log(idBir.classList);

// let username = prompt("Adinizi Giriniz");
// if (username.length) {
//   console.log(`Tebrikler ${username}, Sisteme giriş yaptiniz.`);
// } else {
//   console.log("Bilgi yok");
// }

// let name = prompt("Adınızı Girin");
// let age = prompt("Yasinizi girin");
// let info = document.querySelector("p#info");

// if (!name || !age) {
//   info.innerHTML = "Ad veya yaş boş bırakılmış";
// } else if (name && age > 18) {
//   info.innerHTML = `Ehliyet Alabilirsiniz.`;
// } else if (name && age < 18) {
//   info.innerHTML = `Yaşınız 18'den büyük değil`;
// }

// let namee = prompt("Ad Gir");
// let info = document.querySelector("p#info");
// info.innerHTML = `${namee ? namee : "Ad yok"}`;

// HARF NOTU ÖRNEĞİ START

// let examGrade = prompt("Notu Giriniz:");
// let letterGrade;
// let textInfo = document.querySelector("p#info");
// const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg> `;

// const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`;

// if (examGrade >= 90) {
//   textInfo.innerHTML = `Harf Notunuz :AA Tebrikler ${SMILE}`;
// } else if (examGrade >= 85) {
//   textInfo.innerHTML = `Harf Notunuz :BA Tebrikler ${SMILE}`;
// } else if (examGrade >= 80) {
//   textInfo.innerHTML = `Harf Notunuz :BB Tebrikler ${SMILE}`;
// } else if (examGrade >= 75) {
//   textInfo.innerHTML = `Harf Notunuz :CB Tebrikler ${SMILE}`;
// } else if (examGrade >= 70) {
//   textInfo.innerHTML = `Harf Notunuz :CC Tebrikler ${SMILE}`;
// } else if (examGrade >= 65) {
//   textInfo.innerHTML = `Harf Notunuz :DC Tebrikler ${SMILE}`;
// } else if (examGrade >= 60) {
//   textInfo.innerHTML = `Harf Notunuz :DD Tebrikler ${SMILE}`;
// } else if (examGrade >= 50) {
//   textInfo.innerHTML = `Harf Notunuz :FD Tebrikler ${SMILE}`;
// } else if (examGrade < 50) {
//   textInfo.innerHTML = `Harf Notunuz :FF ${FROWN}`;
// }
// END HARF NOTU ÖRNEĞİ

// function hello() {
//   console.log(`Hello World`);
// }
// hello();
// hello();

// // Funciton örneği start
// let info = document.querySelector("p#info");
// let namee;
// let age;

// function userCheck(namee, age) {
//   if (!namee || !age) {
//     info.innerHTML = "Ad veya yaş boş bırakılmış";
//   } else if (namee && age > 18) {
//     info.innerHTML = `Ehliyet Alabilirsiniz.`;
//   } else if (namee && age < 18) {
//     info.innerHTML = `Yaşınız 18'den büyük değil`;
//   }
// }

// userCheck("MWEEWE", 5);
//End Function Örneği

// let arr1 = [1, 2, 3, 4, 5];

// let femaleName = ["Ayşe", "Fatma", "Hayriye"];
// let maleName = ["Ahmet", "Mehmet", "Hasan"];

// EVENT LISTENER ORNEK START

// let info = document.querySelector("#info");

// console.log(info);

// info.addEventListener("click", fonksiyon1);

// function fonksiyon1() {
//   this.style.color == "red"
//     ? (this.style.color = "black")
//     : (this.style.color = "red");
// }

// EVENTLISTENER ORNEK END

// EVENT LISTENEER ORNEK 2

// let counter = 0;
// let increaseDOM = document.querySelector("#increase");
// let decreaseDOM = document.querySelector("#decrease");
// let infoDOM = document.querySelector("#info");

// increaseDOM.addEventListener("click", clickedFunction);
// decreaseDOM.addEventListener("click", clickedFunction);

// // function clickedFunction() {
// //   this.id == "increase" ? (counter += 1) : (counter -= 1);
// //   infoDOM.innerHTML = counter;
// // }

//EVENT LISTENER ORNEK 2 SON

// LOCAL STORAGE ORNEK 1 START

// localStorage.setItem("İsim", "Ahmet");
// localStorage.setItem("Soyisim", "Çelik");
// localStorage.removeItem("İsim");
// console.log(localStorage.getItem("İsim"));
// console.log(localStorage.getItem("Soyisim"));

// LOCAL STORAGE ORNEK 1 END

//LOCAL STORAGE OBJECT ORNEK START
// let nameObj = { isim: "Ali", soyisim: "Veli" };

// console.log(nameObj);

// localStorage.setItem("nameObj", JSON.stringify(nameObj));

// console.log(localStorage.getItem("nameObj"));

// namObJ2 = JSON.parse(localStorage.getItem("nameObj"));

// console.log(namObJ2);

//LOCAL STORAGE OBJECT ORNEK END

//EVENT LISTENEER VE LOCAL STORAGE ORNEK

let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");
let infoDOM = document.querySelector("#info");

increaseDOM.addEventListener("click", clickedFunction);
decreaseDOM.addEventListener("click", clickedFunction);

function clickedFunction() {
  console.log(this.id);
  this.id = "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  infoDOM.innerHTML = counter;
}
// EVENT LISTENER VE LOCAL STORAGE ORNEK SON
/ // function clickedFunction() {
// //   this.id == "increase" ? (counter += 1) : (counter -= 1);
// //   infoDOM.innerHTML = counter;
// // }