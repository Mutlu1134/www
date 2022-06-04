const numbers1 = [1, 5, 6, 9];
const numbers2 = numbers1.map(myfunc1);

function myfunc1(value, index, array) {
  return value * 2;
}

for (let index = 0; index < numbers1.length; index++) {
  const element = numbers1[index];
  console.log(element);
}
console.log("   ");
for (let index = 0; index < numbers2.length; index++) {
  const element = numbers2[index];
  console.log(element);
}

const numbers3 = numbers1.filter(myfilterfunc1);
function myfilterfunc1(value, index, array) {
  return value > 5;
}

for (let index = 0; index < numbers3.length; index++) {
  const element = numbers3[index];
  console.log(numbers3);
}

let toplam = numbers1.reduce(myreducefunct1);

function myreducefunct1(total, value, index, array) {
  return (total += value);
}
console.log(toplam);

let toplam5denbuyukler = numbers1.every(buyuktur5tenfunct1);

function buyuktur5tenfunct1(value, index, array) {
  return value > 5;
}
console.log(toplam5denbuyukler);

let somebuyuktur5 = numbers1.some(somebuyukturfunc1);

function somebuyukturfunc1(value, index, array) {
  return value > 5;
}
console.log(somebuyuktur5);

const meyveler = ["elma", "armut", "kivi", "uzum", "portakal", "kivi", "armut"];

let sirasi = meyveler.lastIndexOf("armut");
console.log(sirasi);

console.log("   ");
let ilk5tenbuyuksayi = numbers1.findIndex(i5bs);

function i5bs(value, index, array) {
  return value > 5;
}

console.log(ilk5tenbuyuksayi);

const arrolustur = Array.from("ASDQWER");
console.log(arrolustur);

const f = numbers1.entries();

for (const iterator of f) {
  console.log(iterator);
}

let date = new Date();

console.log(
  "Saat " +
    date.getHours() +
    " Dakika " +
    date.getMinutes() +
    " Saniye " +
    date.getSeconds()

);
