function showDancingCat() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".dancing-cat").style.display = "block";
}

function tryAgain() {
  const tryAgainMessage = document.querySelector(".try-again");
  tryAgainMessage.style.display = "block";
  setTimeout(() => {
    tryAgainMessage.style.display = "none";
  }, 2000);
}
