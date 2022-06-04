$(document).ready(function () {
  localStorage.clear();
  // QUESTION BANK
  sorular = [
    {
      soru: "Tarihin sıfır noktası olarak bilinen, insanlık tarihinin ilk somut kalıntılarının bulunduğu Göbekli tepe hangi ilimizdedir?",
      secenekler: {
        a: "Mardin",
        b: "Sanliurfa",
        c: "Sivas",
        d: "Denizli",
      },
      dogrucevap: "B",
    },
    {
      soru: "Tarihin bir başka dönüm noktası olarak gösterilir. Sultanahmet Meydanı'nda, Yerebatan Sarnıcı üstünde yer alır. İstanbul'a gelen turistlerin mutlaka uğrak yerleri arasındadır. Bu ünlü dikili taşın adı nedir?",
      secenekler: {
        a: "Milenyum Taşı",
        b: "Zaman Taşı",
        c: "Apoolo Taşı",
        d: "Triton Taşı",
      },
      dogrucevap: "A",
    },
    {
      soru: "Dünyanın en büyük deniz kazalarından biri olarak tarihe geçti. 1912 yılında 1.550 kişiye mezar olan ünlü transatlantiğin adı nedir? Ödüllü Filmlere konu olmuştur.",
      secenekler: {
        a: "Yıldızlar arası",
        b: "Grinin 50 Tonu",
        c: "Titanik",
        d: "Piyanist",
      },
      dogrucevap: "C",
    },
    {
      soru: "Suçluların yakalanmasında kullanılan en önemli delillerden biridir, suçlunun geride bıraktığı iz?  ",
      secenekler: {
        a: "Ayakkabı izi",
        b: "El izi",
        c: "Tükürük",
        d: "Parmak izi",
      },
      dogrucevap: "D",
    },
    {
      soru: "Haberleşmenin eski dildeki adı nedir? ",
      secenekler: {
        a: "Muharebe",
        b: "Murahere",
        c: "Muhabere",
        d: "Muberehe",
      },
      dogrucevap: "C",
    },
  ];
  let selectedQuestions = [];
  let numberOfQuestion = sorular.length;
  let selectedQuestion = selectRandomQuestion(numberOfQuestion);
  console.log("Secilen soru numarası : " + selectedQuestion);
  showQuestions(selectedQuestion);
  let correctQuestion = 0;
  let falseQuestion = 0;
  // IF U SELECT A
  $("#secenekA").click(function () {
    localStorage.setItem("selectedOption", "A");
    $("#secenekA").addClass("bg-warning");
    $("#secenekB").removeClass("bg-warning");
    $("#secenekC").removeClass("bg-warning");
    $("#secenekD").removeClass("bg-warning");
    $("#idAreUOk").css("visibility", "visible");
  });
  // IF U SELECT B
  $("#secenekB").click(function () {
    localStorage.setItem("selectedOption", "B");
    $("#secenekB").addClass("bg-warning");
    $("#secenekA").removeClass("bg-warning");
    $("#secenekC").removeClass("bg-warning");
    $("#secenekD").removeClass("bg-warning");
    $("#idAreUOk").css("visibility", "visible");
  });
  // IF U SELECT C
  $("#secenekC").click(function () {
    localStorage.setItem("selectedOption", "C");
    $("#secenekC").addClass("bg-warning");
    $("#secenekA").removeClass("bg-warning");
    $("#secenekB").removeClass("bg-warning");
    $("#secenekD").removeClass("bg-warning");
    $("#idAreUOk").css("visibility", "visible");
  });
  // IF U SELECT D
  $("#secenekD").click(function () {
    localStorage.setItem("selectedOption", "D");
    $("#secenekD").addClass("bg-warning");
    $("#secenekA").removeClass("bg-warning");
    $("#secenekB").removeClass("bg-warning");
    $("#secenekC").removeClass("bg-warning");
    $("#idAreUOk").css("visibility", "visible");
  });
  // ARE U OK DIV
  // IF U HOVER ON EVET/YES
  $("#idEvet").hover(
    function () {
      // over
      $("#idEvet").addClass("bg-danger");
      $("#idEvet").removeClass("bg-seconday");
    },
    function () {
      // out
      $("#idEvet").addClass("bg-secondary");
      $("#idEvet").removeClass("bg-danger");
    }
  );
  // IF U HOVER ON HAYIR/NO
  $("#idHayir").hover(
    function () {
      // over
      $("#idHayir").addClass("bg-danger");
      $("#idHayir").removeClass("bg-seconday");
    },
    function () {
      // out
      $("#idHayir").addClass("bg-secondary");
      $("#idHayir").removeClass("bg-danger");
    }
  );

  // IF YOU CLICK YES/EVET
  $("#idEvet").click(function () {
    console.log(
      "Sorunu dogru cevabı: " +
        sorular[selectedQuestion].dogrucevap +
        "secilen soru : " +
        selectedQuestion
    );
    selectedQuestion = localStorage.getItem("selectedQuestion");
    // IF OPTION IS TRUE
    if (
      localStorage.getItem("selectedOption") ===
      sorular[selectedQuestion].dogrucevap
    ) {
      let answer = "#secenek" + localStorage.getItem("selectedOption");
      $(answer).removeClass("bg-warning");
      $(answer).addClass("bg-success");
      $("#idAreUOk").css("visibility", "hidden");
      correctQuestion = correctQuestion + 1;
      localStorage.setItem("correctQuestion", correctQuestion);
    }

    // IF OPTION IS FALSE
    else {
      falseQuestion = falseQuestion + 1;
      localStorage.setItem("falseQuestion", falseQuestion);
      let answer = "#secenek" + localStorage.getItem("selectedOption");
      $(answer).removeClass("bg-warning");
      $(answer).addClass("bg-danger");
      let correctAnswer = "#secenek" + sorular[selectedQuestion].dogrucevap;
      $(correctAnswer).addClass("bg-success");
      $("#idAreUOk").css("visibility", "hidden");
    }
  });
  // IF YOU CLICK NO/HAYIR
  $("#idHayir").click(function () {
    $("#idAreUOk").css("visibility", "hidden");
    localStorage.setItem("selectedOption", "");
    $("#secenekA").removeClass("bg-warning");
    $("#secenekB").removeClass("bg-warning");
    $("#secenekC").removeClass("bg-warning");
    $("#secenekD").removeClass("bg-warning");
  });

  // SELECT RANDOM QUESTION
  function selectRandomQuestion(numberOfQuestion) {
    let selectedQuestion = Math.floor(Math.random() * numberOfQuestion);
    if (!selectedQuestions.includes(selectedQuestion)) {
      selectedQuestions.push(selectedQuestion);
      localStorage.setItem("selectedQuestion", selectedQuestion);
      localStorage.setItem("selectedQuestions", selectedQuestions);
      console.log("Seçilen rastgele numara " + selectedQuestion);
      return selectedQuestion;
    } else if (selectedQuestions.length == numberOfQuestion) {
      gameIsEnd();
      unbindOptions();
    } else {
      while (selectedQuestions.includes(selectedQuestion)) {
        console.log("asdasd" + !selectedQuestions.includes(selectedQuestion));
        selectedQuestion = Math.floor(Math.random() * numberOfQuestion);
        console.log("Üretilen numara" + selectedQuestion);
      }
      selectedQuestions.push(selectedQuestion);
      localStorage.setItem("selectedQuestions", selectedQuestions);
      localStorage.setItem("selectedQuestion", selectedQuestion);
      console.log("Seçilen rastgele numara " + selectedQuestion);
      return selectedQuestion;
    }
  }

  //  SHOW QUESTIONS AND OPTIONS
  function showQuestions(selectedQuestion) {
    // SHOW QUESTION
    $("#soru").text(sorular[selectedQuestion].soru);
    // SHOW OPTIONS
    $("#secenekA").text("A: " + sorular[selectedQuestion].secenekler.a);
    $("#secenekB").text("B: " + sorular[selectedQuestion].secenekler.b);
    $("#secenekC").text("C: " + sorular[selectedQuestion].secenekler.c);
    $("#secenekD").text("D: " + sorular[selectedQuestion].secenekler.d);
  }
  // IS SELECTED OPTION TRUE=
  // function isItCorrect(selectedOption, correctOption) {
  //   var result = selectedOption === correctOption;
  //   return result;
  // }
  // IF YOU CLICK YES, I AM SURE! BUTTON THEN OTHER OPTIONS MAKE "NOT CLICKABLE"
  function unbindOptions() {
    $("#secenekA").unbind("click");
    $("#secenekB").unbind("click");
    $("#secenekC").unbind("click");
    $("#secenekD").unbind("click");
    $("#idNextQuestion").unbind("click");
  }

  // IF U CLICK NEXT QUESTION
  $("#idNextQuestion").click(function () {
    resetOptions();
    let index = selectRandomQuestion(numberOfQuestion);
    console.log("rastgele seçiciden gelen numara  : " + index);
    showQuestions(index);
    localStorage.setItem("selectedOption", "0");
  });
  // IF CLICK NEXT QUESTION THEN RESET ALL OPTIONS
  function resetOptions() {
    console.log("resetted options");
    $("#secenekA").addClass("bg-primary");
    $("#secenekB").addClass("bg-primary");
    $("#secenekC").addClass("bg-primary");
    $("#secenekD").addClass("bg-primary");
    $("#secenekA").removeClass("bg-warning");
    $("#secenekB").removeClass("bg-warning");
    $("#secenekC").removeClass("bg-warning");
    $("#secenekD").removeClass("bg-warning");
    $("#secenekA").removeClass("bg-danger");
    $("#secenekB").removeClass("bg-danger");
    $("#secenekC").removeClass("bg-danger");
    $("#secenekD").removeClass("bg-danger");
    $("#secenekA").removeClass("bg-success");
    $("#secenekB").removeClass("bg-success");
    $("#secenekC").removeClass("bg-success");
    $("#secenekD").removeClass("bg-success");
  }

  function gameIsEnd() {
    let skipQuestion =
      numberOfQuestion -
      localStorage.getItem("correctQuestion") -
      localStorage.getItem("falseQuestion");
    alert(`
    Oyun Bitti. 
    Doğru sayınız: ${localStorage.getItem("correctQuestion")}
    Yanlış sayınız: ${localStorage.getItem("falseQuestion")}
    Boş sayınız :  ${skipQuestion}`);
    localStorage.clear();
  }
});
