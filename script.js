 // ===== CONFIGURAÇÃO =====
let time = 30;
let timer = null;
let paused = false;
let score = 0;

// ===== ELEMENTOS =====
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
const feedback = document.getElementById("feedback");
const playArea = document.getElementById("playArea");

// ===== EVENTOS =====
btnPlay.onclick = startGame;
btnPause.onclick = pauseGame;
btnResume.onclick = resumeGame;
btnHow.onclick = () => showScreen("how");
btnBack.onclick = () => showScreen("menu");
btnMenu.onclick = () => showScreen("menu");

// ===== TROCAR TELAS =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(tela => {
    tela.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// ===== INICIAR JOGO =====
function startGame() {
  time = 30;
  score = 0;
  paused = false;

  timeText.textContent = time;
  scoreText.textContent = score;

  showScreen("game");