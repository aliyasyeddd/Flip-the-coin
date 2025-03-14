const btnFlip = document.querySelector("#btn");
const imgSrc = document.querySelector(".coin-img");
const coinResult = document.querySelector("#result");

btnFlip.addEventListener("click", () => {
  imgSrc.src = imgSrc.src.includes("heads") ? "./resources/tails.svg" : "./resources/heads.svg";
  coinResult.textContent = imgSrc.src.includes("heads") ? "Heads" : "Tails";
});



