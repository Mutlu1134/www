$(document).ready(function () {
  let inputObj = document.getElementById("idinputnum");
  $("#idsubmit").click(function (e) {
    if (inputObj.checkValidity()) {
      $("#idwarning").text("OK, The number is between 10-20.");
    } else {
      $("#idwarning").text("NOK, The number is NOT between 10-20");
    }
  });
});
