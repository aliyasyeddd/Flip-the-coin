const btnFlip = document.querySelector("#btn");
const imgSrc = document.querySelector(".coin-img");
const coinResult = document.querySelector("#result");

btnFlip.addEventListener("click", () => {
  imgSrc.src =
    Math.random() < 0.5 ? "./resources/heads.svg" : "./resources/tails.svg";
  imgSrc.src === "./resources/heads.svg"
    ? (coinResult.textContent = "Heads")
    : (coinResult.textContent = "Tails"); 
   
});

//"./resources/tails.svg"