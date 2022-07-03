class Araba {
  constructor(marka, model, km) {
    this.marka = marka;
    this.model = model;
    this.km = km;
    this.isim2 = "isim"; // bu asıl property, constructer içine yazılıyor.
  }
  calistir() {
    // method
    console.log(this.marka + " Calistiriliyor");
  }
  hizlandir() {
    console.log(this.marka + " Hizlandırılıyor");
  }
  yavasla() {
    console.log(this.marka + " Yavaşlatılıyor");
  }
  dur() {
    console.log(this.marka + " Durduruldu");
  }
  isim = ""; // prop

  set iset(gelenisim) {
    this.isim = gelenisim;
  }
  get iget() {
    return this.isim;
  }
}

let m = "İSİMİNİZ";

for (const iterator of m) {
  console.log(iterator + " | ");
}

Araba.prototype.modelyili = "2010";

Araba.prototype.modelyiliyekle = function (yil) {
  return (this.modelyili = yil);
};

const Opel = new Araba("Opel", "Astra", "40k");
const Ford = new Araba("Ford", "Focus", "50k");

Ford.marka = "FORDD";
console.log(Opel.model + " " + Opel.km);
console.log(Ford.marka + " " + Ford.model + " " + Ford.km);

console.log(Opel.modelyili);

$(document).ready(function () {
  $("#calistir").click(function (e) {
    Opel.calistir();
  });
  $("#hizlandir").click(function (e) {
    Opel.hizlandir();
  });
  $("#yavasla").click(function (e) {
    Opel.yavasla();
  });

  $("#durdur").click(function (e) {
    Opel.dur();
  });

  console.log(Ford.isim);
  Ford.iset = "ASAASDASDASD";
  console.log(Ford.iget);
});
