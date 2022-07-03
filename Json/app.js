// import obj2 from '.user.json' assert { type: "json" };
// import obj2 from ".user.json";

$(document).ready(function () {
  //  alinanobj 'yi inline objectTen okumak için OK.
  const text = ' [{ "name": "Ali", "lastName": "Veli", "age": 25 }]';
  const alinanobj = JSON.parse(text);

  // $.getJSON("./user.json", function (data, textStatus, jqXHR) {
  //   alinanobj.push(data);
  //   console.log(alinanobj);
  // });
  // const alinanobj = JSON.parse("./user.json");
  textString = alinanobj.name + " " + alinanobj.lastName + " " + alinanobj.age;
  $("#idp").text("This data brought from JSON (inline parse): " + textString);
  console.log(alinanobj);

  $("#idsubmit").click(function (e) {
    // let ekleme = `{"name": "${$("#idname").val()}","lastName": "${$("#idlastname").val()}","age":"${$("#idage").val()}" }`;

    let name = $("#idname").val();
    let lname = $("#idlastname").val();
    let age = $("#idage").val();
    let ekleme = { name: name, lastName: lname, age: age };
    console.log(ekleme);
    alinanobj.push(ekleme);
    console.log(alinanobj);

    // console.log(Object.assign(obj, ekleme));
  });

  // $.getJSON("user.json", function (data, textStatus, jqXHR) {
  //   console.log(data);
  //   let ekleme = { firstName: "a", lastName: "b", age: 23 };
  //   console.log(ekleme);
  //   data.employees.Push(ekleme);
  //   console.log(data);
  // });
});
