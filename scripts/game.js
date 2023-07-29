function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    emptyPlayerNameElement.textContent = "Please enter valid player name!!!";
    return;
  }
  emptyPlayerNameElement.textContent = "";
  gameAreaElement.style.display = "block";
}
