const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  // i will run from 0 to 5
  for (let i = 0; i < 6; i++) {
    // we must have += because if we have just = we will just overriding this in each and every iteration.
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  // we use hex.length because we make sure that well get all the elements in the array
  return Math.floor(Math.random() * hex.length);
}