 
  // ===== VARIÁVEIS =====
let time = 30;
let score = 0;
let timer = null;
let paused = false;

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
const playArea = document.getElementById("playArea");
const feedback = document.getElementById("feedback");

// ===== EVENTOS =====
btnPlay.onclick = startGame;
btnPause.onclick = pauseGame;
btnResume.onclick = resumeGame;
btnHow.onclick = () => showScreen("how");
btnBack.onclick = () => showScreen("menu");
btnMenu.onclick = () => showScreen("menu");

// ===== TROCAR TELAS =====
function showScreen(id) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.class