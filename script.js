// VARIÁVEIS
let time = 30;
let score = 0;
let timer = null;
let paused = false;

document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTOS
  const btnPlay = document.getElementById("btnPlay");
  const btnPause = document.getElementById("btnPause");
  const btnResume = document.getElementById("btnResume");
  const btnHow = document.getElementById("btnHow");
  const btnBack = document.getElementById("btnBack");
  const btnMenu = document.getElementById("btnMenu");

  const timeText = document.getElementById("time");
  const scoreText = document.getElementById("score");
  const finalScoreText = document.getElementById("finalScore");

  const monkey = document.getElementById("monkey");
  const playArea = document.getElementById("playArea");
  const feedback = document.getElementById("feedback");

  // EVENTOS
  btnPlay.onclick = startGame;
  btnPause.onclick = pauseGame;
  btnResume.onclick = resumeGame;
  btnHow.onclick = () => showScreen("how");
  btnBack.onclick = () => showScreen("menu");
  btnMenu.onclick = () => showScreen("menu");

  // TELAS
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  // INICIAR
  function startGame() {
    time = 30;
    score = 0;
    paused = false;

    timeText.textContent = time;
    scoreText.textContent = score;

    showScreen("game");
    moveMonkey();

    clearInterval(timer);

    timer = setInterval(() => {
      if (!paused) {
        time--;
        timeText.textContent = time;

        if (time <= 0) {
          endGame();
        }
      }
    }, 1000);
  }

  // MOVER
  function moveMonkey() {
    const maxX = playArea.clientWidth - monkey.clientWidth;
    const maxY = playArea.clientHeight - monkey.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    monkey.style.left = x + "px";
    monkey.style.top = y + "px";
  }

  // CLIQUE
  monkey.onclick = () => {
    score++;
    scoreText.textContent = score;
    feedback.textContent = "UHUU! 🎉";
    moveMonkey();
  };

  // PAUSA
  function pauseGame() {
    paused = true;
    showScreen("pause");
  }

  function resumeGame() {
    paused = false;
    showScreen("game");
  }

  // FINAL
  function endGame() {
    clearInterval(timer);
    finalScoreText.textContent = score;
    showScreen("end");
  }

});