// botão para celular
const botaoMobile = document.querySelector("#botaoMobile");

function ativarMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const span = document.getElementById("regularNavigation");
  span.classList.toggle('ativado');

  const active = span.classList.contains('ativado');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

botaoMobile.addEventListener('click', ativarMenu);
botaoMobile.addEventListener('touchstart', ativarMenu);

//ativar login

const login = document.querySelector(".login");

function abrirLogin(evento) {
  
}

login.addEventListener('click', abrirLogin);