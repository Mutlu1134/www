$("#btn1").click(function (e) {
  let w = window.open();
  w.document.open();
  w.document.write("asd");
  w.document.close();
});

console.log(document.getElementsByTagName("h1"));

console.log(!!2);
