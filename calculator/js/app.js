$(document).ready(function () {
  let text = "";
  let islem = "";
  const hm = {
    toplama: function (sayi1, sayi2) {
      return (this.sonuc = sayi1 + sayi2);
    },
    carpma: function (sayi1, sayi2) {
      return (this.sonuc = sayi1 * sayi2);
    },
    bolme: function (sayi1, sayi2) {
      return (this.sonuc = sayi1 / sayi2);
    },
    cikarma: function (sayi1, sayi2) {
      return (this.sonuc = sayi1 - sayi2);
    },
  };
  //  TIKLANANI EKRANI YAZMA
  $("#id1").click(function (e) {
    ekrandagoster((text = text + "1"));
  });
  $("#id2").click(function (e) {
    ekrandagoster((text = text + "2"));
  });
  $("#id3").click(function (e) {
    ekrandagoster((text = text + "3"));
  });

  $("#id4").click(function (e) {
    ekrandagoster((text = text + "4"));
  });
  $("#id5").click(function (e) {
    ekrandagoster((text = text + "5"));
  });
  $("#id6").click(function (e) {
    ekrandagoster((text = text + "6"));
  });
  $("#id7").click(function (e) {
    ekrandagoster((text = text + "7"));
  });
  $("#id8").click(function (e) {
    ekrandagoster((text = text + "8"));
  });
  $("#id9").click(function (e) {
    ekrandagoster((text = text + "9"));
  });
  $("#id0").click(function (e) {
    ekrandagoster((text = text + "0"));
  });
  $("#dot").click(function (e) {
    ekrandagoster((text = text + "."));
  });

  function ekrandagoster(textString) {
    $("#display").text(textString);
  }
  // +-*/ BASILDIĞINDA İŞLEMLERİ
  // +++++++++++++++
  $("#idplus").click(function (e) {
    // text = $("#display").text() + "+";
    // ekrandagoster(text);

    ysayi1 = parseFloat($("#display").text());
    console.log(ysayi1);
    text = "";
    ekrandagoster(text);
    islem = "+";
  });

  $("#idminus").click(function (e) {
    ysayi1 = parseFloat($("#display").text());
    text = "";
    ekrandagoster(text);
    islem = "-";
  });

  $("#idslash").click(function (e) {
    ysayi1 = parseFloat($("#display").text());
    text = "";
    ekrandagoster(text);
    islem = "/";
  });

  $("#idmultiply").click(function (e) {
    ysayi1 = parseFloat($("#display").text());
    text = "";
    ekrandagoster(text);
    islem = "*";
  });

  $("#enter").click(function (e) {
    ysayi2 = parseFloat($("#display").text());
    text = "";

    switch (islem) {
      case "+":
        ekrandagoster(hm.toplama(ysayi1, ysayi2));
        break;
      case "-":
        ekrandagoster(hm.cikarma(ysayi1, ysayi2));
        break;
      case "/":
        ekrandagoster(hm.bolme(ysayi1, ysayi2));
        break;
      case "*":
        ekrandagoster(hm.carpma(ysayi1, ysayi2));
        break;
      default:
        break;
    }
    resetle();
  });

  // C
  $("#idc").click(function (e) {
    resetle();
    text = "";
    ekrandagoster(text);
  });

  function resetle() {
    sayi1 = "";
    sayi2 = "";
    ysayi = "";
    ysayi2 = "";
  }
  // ENTERE BASILDIĞINDA NETİCEYİ EKRANA YAZMA
});
