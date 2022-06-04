// Değişken Tanımlama
let x = 5;
let y = 2;
let z = x + y;
console.log(z);

let yazi = "ASDasdASD";
let yazi2 = "WERwerWER";
console.log(yazi + " " + yazi2);

document.getElementById("id1").innerHTML = "Merhaba Dünya";

const pi = 3.14;
console.log(pi);

const TUM_HARFLER_BUYUK = 1;
let yalnızcaAradakiHarflerBuyuk = 1;

const numbers = [1, 5, 88, 21, 1];

for (const key in numbers) {
  if (numbers.hasOwnProperty.call(numbers, key)) {
    const element = numbers[key];
  }
}

let price = 100;
let taxRate = 0.18;
let taxPrice = price * taxRate;
let total = taxPrice + price;
console.log(
  "Fiyat :" +
    price +
    " Vergi oranı :" +
    taxRate +
    " Vergi tutarı :" +
    taxPrice +
    " Toplam : " +
    total
);

console.log("2 üzeri 5 =", 2 ** 5);

console.log("Floor ile aşağı yuvarlama 1.6 =", Math.floor(1.6));

// let data1 = "Data";
let data1;

console.log(Boolean(data1));
