let time = 30;
let timer = null;
let paused = false;

// ELEMENTOS
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnResume = document.getElementById("btnResume");
const btnHow = document.getElementById("btnHow");
const btnBack = document.getElementById("btnBack");
const btnMenu = document.getElementById("btnMenu");

const timeText = document.getElementById("time");
const monkey = document.getElementById("monkey");
const feedback = document.getElementById("feedback");
const playArea = document.getElementById("playArea");

// EVENTOS
btnPlay.onclick = startGame;
btnPause.onclick = pauseGame;
btnResume.onclick = resumeGame;
btnHow.onclick = () => showScreen("how");
btnBack.onclick = () => showScreen("menu");
btnMenu.onclick = () => showScreen("menu");

// TROCAR TELA
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(tela => {
    tela.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// INICIAR JOGO
function startGame() {
  time = 30;
  paused = false;
  timeText.textContent = time;

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

// MOVER MACACO
function moveMonkey() {
  const areaWidth = playArea.offsetWidth;
  const areaHeight = playArea.offsetHeight;

  const x = Math.random() * (areaWidth - 100);
  const y = Math.random() * (areaHeight - 100);

  monkey.style.left = x + "px";
  monkey.style.top = y + "px";
}

// CLIQUE
monkey.onclick = () => {
  feedback.textContent = "UHUU! 🎉";
  moveMonkey();
};

// PAUSAR
function pauseGame() {
  paused = true;
  showScreen("pause");
}

// VOLTAR
function resumeGame() {
  paused = false;
  showScreen("game");
}

// FINAL
function endGame() {
  clearInterval(timer);
  showScreen("end");
}