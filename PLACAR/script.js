let pontosA = 0;
let pontosB = 0;
let setsA = 0;
let setsB = 0;

/* display */
function atualizarDisplay(id, valor) {
  const container = document.getElementById(id);
  container.innerHTML = "";

  const numero = valor.toString().padStart(2, '0');

  numero.split("").forEach(d => {
    const div = document.createElement("div");
    div.className = "digit";
    div.innerText = d;
    container.appendChild(div);
  });
}

/* pontos */
function addPonto(time) {
  if (time === 'A') {
    pontosA++;
    atualizarDisplay('pontosA', pontosA);
  } else {
    pontosB++;
    atualizarDisplay('pontosB', pontosB);
  }
}

function removerPonto(time) {
  if (time === 'A' && pontosA > 0) {
    pontosA--;
    atualizarDisplay('pontosA', pontosA);
  } else if (time === 'B' && pontosB > 0) {
    pontosB--;
    atualizarDisplay('pontosB', pontosB);
  }
}

/* sets + confete */
function addSet(time) {
  if (time === 'A') {
    setsA++;
    document.getElementById('setsA').innerText = setsA;
  } else {
    setsB++;
    document.getElementById('setsB').innerText = setsB;
  }

  soltarConfete();
}

/* reset */
function zerar() {
  pontosA = 0;
  pontosB = 0;
  setsA = 0;
  setsB = 0;

  atualizarDisplay('pontosA', 0);
  atualizarDisplay('pontosB', 0);

  document.getElementById('setsA').innerText = 0;
  document.getElementById('setsB').innerText = 0;
}

/* 🎉 CONFETE FUNCIONANDO */
function soltarConfete() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confete";

    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.backgroundColor = `hsl(${Math.random()*360},100%,60%)`;

    document.body.appendChild(c);

    setTimeout(() => c.remove(), 2000);
  }
}

/* iniciar */
atualizarDisplay('pontosA', 0);
atualizarDisplay('pontosB', 0);