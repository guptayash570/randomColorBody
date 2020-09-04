const btn = document.querySelector("#btn");
const colorText = document.querySelector("#hex-color");
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
//EVENT
btn.addEventListener("click", changeBody);
//FUNCTIONS
function changeBody() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[generateRandom()];
  }
  //   console.log(hexCode);
  document.body.style.backgroundColor = hexCode;
  colorText.innerHTML = hexCode;
}
function generateRandom() {
  return Math.floor(Math.random() * hex.length);
}
