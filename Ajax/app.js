$(document).ready(function () {
  $("#idbtn").click(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("idp").innerHTML = this.responseText;
        $("#idp").html(this.responseText);
        // $("#idp").text(this.responseText);
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "ajaxEx.txt", true);
    xhttp.send();
  });
});
