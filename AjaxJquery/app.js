// $(document).ready(function () {
//   $("#idbtn").click(function () {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         // document.getElementById("idp").innerHTML = this.responseText;
//         $("#idp").html(this.responseText);
//         // $("#idp").text(this.responseText);
//         console.log(this.responseText);
//       }
//     };
//     xhttp.open("GET", "ajaxEx.txt", true);
//     xhttp.send();
//   });
// });
$(document).ready(function () {
  $("#idbtn").click(function () {
    $.ajax({
      type: "GET",
      url: "ajaxEx.txt",
      // data: "data",
      // dataType: "dataType",
      success: function (response) {
        $("#idp").html(response);
        console.log(response);
      },
    });
  });

  $("#idbtn2").click(function (e) {
    $("#idp2").load("ajaxEx.txt", "data", function (response, status, request) {
      // IF YOU WRITE NOTHING. THATS OK. LOAD METHOD IS GOING TO RUN.
      // if (status == "success") {
      //   console.log(status);
      //   //  this; // dom element
      //   // this.innerHTML = response;
      //   // $("#idp2").html(response);
      // }
    });
  });

  $("#idbtn3").click(function () {
    $.get("ajaxEx.txt", function (data, textStatus, jqXHR) {
      console.log(
        "Data :" + data + "textStatus :" + textStatus + "jqXHR :" + jqXHR
      );
      $("#idp3").html(data);
    });
  });

  $("#idbtn4").click(function (e) {
    console.log("btn4 clicked");
    $.post(
      // NOK! .TXT FILE DOES NOT ALLOW THE METHOD: 405 (Method Not Allowed)
      "ajaxPost.txt",
      // data
      {
        name: "John",
        lastName: "Lena",
      },
      function (data, textStatus, jqXHR) {
        console.log(
          "data : " + data + "textStatus : " + textStatus + "jqXHR" + jqXHR
        );
      },
      "dataType"
    );
  });
});
