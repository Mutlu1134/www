$(document).ready(function () {
  let slider = document.getElementById("inputrange");
  slider.oninput = function () {
    console.log(slider.value);
    $("#progressbar").css("width", slider.value + "%");
  };
});

console.log(Math.floor(12));
