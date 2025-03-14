const btnFlip = document.querySelector("#btn");
const imgSrc = document.querySelector(".coin-img");
const coinResult = document.querySelector("#result");

function flipCoin() {
  imgSrc.src = imgSrc.src.includes("heads") ? "./resources/tails.svg" : "./resources/heads.svg";
  coinResult.textContent = imgSrc.src.includes("heads") ? "Heads" : "Tails";
}

btnFlip.addEventListener("click",flipCoin);
imgSrc.addEventListener("click",flipCoin);



