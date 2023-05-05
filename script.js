const input1 = document.querySelector(".input-left");
const input2 = document.querySelector(".input-right");
const operator = document.querySelector(".operation");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset-button");

operator.addEventListener("click", (e) => {
  if (!input1.value || !input2.value) {
    alert("Harus mengisi semua input terlebih dahulu!");
    return;
  }
  if (e.target.matches(".op")) {
    const soal = input1.value + e.target.textContent + input2.value;
    result.innerHTML = eval(soal);
  }
});

reset.addEventListener("click", (e) => {
  result.innerHTML = "";
  input1.value = "";
  input2.value = "";
});
