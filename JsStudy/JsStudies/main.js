// jqdocready
$(document).ready(function () {
  // jqclick
  $("#clickbtn").click(function () {
    $("#id0").hide();
  });

  $("#doubleclick").dblclick(function () {
    $("#id1").hide();
  });

  $("#alan3").hover(
    function () {
      // over
      document.querySelector("#alan3mesaji").innerHTML =
        "Mouse entered AREA 3.";
      $("#alan3mesaji").show();
    },
    function () {
      // out
      document.querySelector("#alan3mesaji").innerHTML = "";
    }
  );

  $("#fullname1").focus(function () {
    $(this).css("background-color", "yellow");
  });
  $("#email1").focus(function (e) {
    $(this).css("background-color", "yellow");
    e.preventDefault();
  });

  $("#fullname1").blur(function (e) {
    $(this).css("background-color", "green");
    e.preventDefault();
  });
  $("#email1").blur(function (e) {
    $(this).css("background-color", "green");
    e.preventDefault();
  });

  $("#btnidgörünmez").hover(
    function () {
      // over
      $("#pid1").css("background-color", "red");
      $("#idmoodbad").css("visibility", "visible");
    },
    function () {
      // out
      $("#pid1").css("background-color", "white");
      $("#idmoodbad").css("visibility", "hidden");
    }
  );

  $("#btnidgörünür").hover(
    function () {
      // over
      $("#idmoodgood").css("visibility", "visible");
    },
    function () {
      // out
      $("#idmoodgood").css("visibility", "hidden");
    }
  );

  $("#btnidgörünür").click(function (e) {
    $("#pid1").show(100);
    e.preventDefault();
  });

  $("#btnidgörünmez").click(function (e) {
    $("#pid1").hide(100);
    e.preventDefault();
  });

  $("#idtoggle1").click(function (e) {
    e.preventDefault();
    $("#pid3").toggle(500);
  });

  $("#wmn").click(function (e) {
    $("#idm").fadeIn();
    $("#idu").fadeIn(500);
    $("#idt").fadeIn(1500);
    $("#idl").fadeIn(2000);
    $("#idu2").fadeIn(2500);
  });

  $("#closewmn").click(function (e) {
    $("#idm").fadeOut(2500);
    $("#idu").fadeOut(2000);
    $("#idt").fadeOut(1500);
    $("#idl").fadeOut(1000);
    $("#idu2").fadeOut(500);
  });

  $("#togglebtn").click(function (e) {
    e.preventDefault();
    $("#sidm").fadeToggle(1500);
  });

  $("#slidedownbtn").click(function (e) {
    e.preventDefault();
    $("#slideupdown").slideDown(1000);
  });

  $("#slideupbtn").click(function (e) {
    e.preventDefault();
    $("#slideupdown").slideUp(1000);
  });

  $("#slidetogglebtn").click(function (e) {
    e.preventDefault();
    $("#slidetoggle").slideToggle(1000);
  });

  $("#idstartani").click(function (e) {
    e.preventDefault();
    $("#idbox1").animate(
      {
        left: "250px",
        opacity: "0.5",
        height: "200px",
        width: "200px",
        fontSize: "2em",
      },
      "slow"
    );
  });

  $("#idresetani").click(function (e) {
    e.preventDefault();
    $("#idbox1").animate(
      {
        right: "1000px",
        opacity: "1",
        height: "100px",
        width: "100px",
        fontSize: "1em",
      },
      "slow"
    );
  });

  $("#animatebuttonid").click(function (e) {
    e.preventDefault();
    $("#box2").animate({ width: "toggle" });
    // $("#box2").animate({ height: "toggle" }); //Height ekseninde toggle yapar
    // $("#box2").animate({ hide: "toggle" }); //Hide toggle yapar
  });

  $("#idopengarrage").click(function (e) {
    e.preventDefault();
    $("#idgarragedoor").animate({ height: "0" }, 2000, function () {
      alert("Garrage Door has been opened.");
    });
  });

  $("#idclosegarrage").click(function (e) {
    e.preventDefault();
    $("#idgarragedoor").animate({ height: "500px" }, 2000, function () {
      alert("Garrage Door Has Been Closed");
    });
  });

  $("#idstop").click(function (e) {
    $("#idgarragedoor").stop();
  });

  $("#idupdownbutton").click(function () {
    $("#idupdownbutton")
      .css("background-color", "red")
      .slideUp(2000)
      .slideDown(2000, function () {
        $("#idupdownbutton").css("background-color", "blue");
      });
  });

  $("#idbtntext").click(function (e) {
    alert("Text is: " + $("#idp1").text());
  });

  $("#idbtn-html").click(function (e) {
    alert("HTML is:" + $("#idp1").html());
  });

  $("#idshowalert").click(function (e) {
    alert("Written text is:" + $("#idinputtxt").val());
  });

  $("#formgetattr").click(function (e) {
    alert("İnput form's style is: " + $("#idinputtxt").attr("style"));
  });

  $("#idbtntxt1").click(function (e) {
    $("#idp2").text("Text has been changed :)");
  });

  $("#idbtnhtml1").click(function (e) {
    $("#idp3").html("<button>The <b>HTML</b> has been changed</button>");
  });
  $("#idbtnvalue").click(function (e) {
    $("#idtxt1").val("Value has been changed");
  });
  $("#btnw3").click(function (e) {
    $("#idanchor").attr("href", "www.w3schools.com");
  });

  $("#btngoogle").click(function (e) {
    $("#idanchor").attr("href", "www.google.com");
  });

  $("#after1").click(function (e) {
    $("#div1").after("<p class='text-center'>Text <b>after</b> Div </p>");
  });
  $("#before1").click(function (e) {
    $("#div1").before("<p class='text-center'>Text <b>before</b> Div </p>");
  });

  $("#removediv").click(function (e) {
    $("#div1").remove();
  });

  $("#emptydiv").click(function () {
    $("#div1").empty();
  });

  $("#beautifulbtn").click(function (e) {
    $("#beautifulbtn").addClass("btn bg-dark text-light mt-1");
  });

  $("#beautifulbtn2").click(function (e) {
    $("#beautifulbtn2").toggleClass("btn bg-dark text-light mt-1");
  });
  $("#windowsize").click(function (e) {
    alert("Window size: " + $(window).height() + "x" + $(window).width());
  });

  $("#documentsize").click(function (e) {
    alert("Document size: " + $(window).height() + "x" + $(window).width());
  });

  $("#ajaxex").click(function (e) {
    $("#ajxidp").load("demo_test.txt");
  });

 
});
