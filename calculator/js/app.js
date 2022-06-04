function myFunction(x) {
  let a = display.innerHTML;
  if (x == "C") {
    display.innerHTML = "";
  } else if (x == "+") {
    display.innerHTML = "";
    console.log(a);
  } else if (x == "Enter") {
    console.log(math.sum);
    math.sum(a + a);
  } else {
    const display = document.getElementById("display");
    display.innerText = display.innerHTML + x;
  }
}
