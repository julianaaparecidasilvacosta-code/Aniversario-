// 🎶 Música
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botaoMusica");
let tocando = false;

botaoMusica.addEventListener("click", () => {
  if (!tocando) {
    musica.play();
    botaoMusica.textContent = "⏸ 음악 멈추기";
    tocando = true;
  } else {
    musica.pause();
    botaoMusica.textContent = "🎵 음악 재생";
    tocando = false;
  }
});

// 💌 Mostrar/ocultar carta
const botaoCarta = document.getElementById("botaoCarta");
const mensagem = document.getElementById("mensagem");
let aberta = false;

botaoCarta.addEventListener("click", () => {
  aberta = !aberta;
  mensagem.classList.toggle("visivel", aberta);
  botaoCarta.textContent = aberta ? "💌 닫기" : "💌 편지 보기";
});

// 💞 Corações suaves flutuando
const efeitos = document.querySelector(".efeitos");

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.textContent = "♡";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = 5 + Math.random() * 5 + "s";
  efeitos.appendChild(coracao);
  setTimeout(() => coracao.remove(), 10000);
}

setInterval(criarCoracao, 1200);

// Contador de tempo de amizade (anos, meses, dias, horas, minutos, segundos)
const tempoAmizade = document.getElementById("tempoAmizade");
const inicioAmizade = new Date("2022-06-10T17:42:00");

function atualizarTempo() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicioAmizade.getFullYear();
  let meses = agora.getMonth() - inicioAmizade.getMonth();
  let dias = agora.getDate() - inicioAmizade.getDate();
  let horas = agora.getHours() - inicioAmizade.getHours();
  let minutos = agora.getMinutes() - inicioAmizade.getMinutes();
  let segundos = agora.getSeconds() - inicioAmizade.getSeconds();

  // Ajustes para valores negativos (para manter a contagem precisa)
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  tempoAmizade.textContent = `${anos}년 ${meses}개월 ${dias}일 ${horas}시간 ${minutos}분 ${segundos}초`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();


