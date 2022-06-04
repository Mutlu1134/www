function myFunction() {
  document.getElementById("parag").innerHTML =
    objectvar.firstname + " " + objectvar.lastname;
}

const objectvar = {
  firstname: "QWE",
  lastname: "ASD",
};

const objectolustur = {
  isim: "ASDd",
  soyisim: "QWEr",
};

function changeColor() {
  document.getElementById("div1").style.backgroundColor = "yellow";
}

function calculate() {
  var charlength = document.getElementById("txt1");
  var x = charlength.length;
  alert(charlength);
}

function buyut() {
  var xx = document.getElementById("kck").innerHTML;
  document.getElementById("kck").innerHTML = xx;
}

const fruits = ["Elma", "Armut", "Cilek "];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("Karpuz");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.push("Mandalina", "Armut", "Kiraz", "Visne");
console.log(fruits);

fruits.sort();
console.log(fruits);

const d = new Date();
console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear());
console.log(d);

let x = Math.round(Math.random() * 10);
let y = Math.round(Math.random() * 10);
let z = Math.max(x, y);
console.log("x=", x, "y=", y, "En büyüğü=", z);
let zz = x < 5 ? "Küçük" : "Büyük";
console.log(zz);

for (let index = 0; index < fruits.length; index++) {
  //   const element = fruits[index];
  console.log(fruits[index]);
}
console.log(" ");
for (const iterator of fruits) {
  console.log(iterator);
}

document.getElementsByTagName("p")[0].innerHTML = "SA";

document.getElementById("Photo").src = "https://picsum.photos/id/159/200/300";

document.getElementById("input1").value = "Selamlar";

document.getElementById("first").style.color = "red";
document.getElementById("first").style.fontSize = "25px";

document.getElementById("first").style.display = "none";

document.getElementById("but").addEventListener("click", fonkCal);

function fonkCal() {
  document.getElementById("sec").innerHTML = "Yazdı";
}

document.getElementById("mybutton").addEventListener("click", func1);

function func1() {
  alert("Butona Bastn");
}

window.addEventListener("resize", function2);

function function2() {
  document.getElementById("Resize").innerHTML = Math.random();
}

function changeText(id) {
  id.innerHTML = "Clicked";
}

// document.getElementById("div-id").addEventListener("mousemove", calisfonk);

document.getElementById("div-id").addEventListener("mousemove", calisfonk);

function calisfonk() {
  document.getElementById("randnum").innerHTML = Math.random();
}

function RemoveListener() {
  document.getElementById("div-id").removeEventListener("mousemove", calisfonk);
}

document.getElementById("pp1").firstChild.nodeValue =
  document.getElementById("hh1").childNodes[0].nodeValue;

// Yeni bir element ve içine yazı ekleme
const para = document.createElement("p"); // p elementi create edildi..
const node = document.createTextNode("Yeni yazi eklendi."); // textnode yazısı oluşturuldu
para.appendChild(node); // Text node'u p elementine eklendi. bu zorunlu adım.
const element = document.getElementById("apdev"); // oluşturulan elementin var olan bir elemente eklenmesi gerekir. burda eklenecek divi bulduk
element.appendChild(para); //burdada bulunan div.e oluşturulan element eklendi....

// Yeni bir element ve içine yazı ekleme
const para2 = document.createElement("h1");
const txtnode = document.createTextNode("Bunuda yeni ekledim");
para2.appendChild(txtnode);

const elementsec = document.getElementById("apdev2");
elementsec.appendChild(para2);

// Yeni bir element ve içine yazı ekleme
const aa = document.createElement("h2");
const bb = document.createTextNode("Bu text nodeu yeni ekledim.");
aa.appendChild(bb);
console.log(aa);

const ddd = document.getElementById("apdev3").appendChild(aa);

// ÖRNEK ÇALIŞMA
function benimfunction() {
  let deger = document.getElementById("inpt1").value;
  console.log(deger);
  let txt1;
  if (isNaN(deger) || deger < 0 || deger > 10) {
    txt1 = "Geçersiz Değer";
  } else {
    txt1 = "OK";
  }
  document.getElementById("snc").innerHTML = txt1;
}
