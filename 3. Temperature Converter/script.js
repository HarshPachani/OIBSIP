let temp = document.getElementById("temp");
let s1 = document.getElementById("s1");
let result = document.getElementById("f-result");
button.addEventListener("click", converter);
let f = document.getElementById("f");

function converter() {
  if (s1.value == "Fahrenheit") {
    // c=(f-32)*(5/9)
    f.value = (d.value - 32) * (5 / 9) + " ℃";
  } else if (s1.value == "Celcuis") {
    f.value = d.value * 1.8 + 32 + " ℉";
  }
}
