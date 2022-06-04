$(document).ready(function () {
  const obj = JSON.parse('{ "name": "Ali", "lastName": "Veli", "age": 25 }');
  textString = obj.name + " " + obj.lastName + " " + obj.age;

  $("#idp").text("This data brought from JSON (inline parse): " + textString);

  const obj2 = JSON.parse("user.json");
  textString2 = obj2.name + " " + obj2.lastName + " " + obj2.age;
  $("idp2").text(textString2);
});
