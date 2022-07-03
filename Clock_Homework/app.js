$(document).ready(function () {
  let yname = prompt("Please enter your name : ");
  window.setInterval(showTime, 1000);

  $("#idmrb").html("Hi " + yname + " !");
  $("#idbye").html("See you again. :)");
  function showTime() {
    const d = new Date();
    let message = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    $("#idclk").html(message);
  }

  setTimeout(() => {
    showTime();
  }, 1000);
});
