const botaoMobile = document.getElementById('botaoMobile');

function toggleMenu(event) {

  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);

/**

 Caro programador, quando eu fiz esse código
 eu estava iniciando em javaScript. 
 Exatamente no dia 11/01/2023.
 Na época, Eu e Deus fizemos esse código, 
 HOJE SÓ DEUS sabe o que tem aí,
 tome muito cuidado com esse menu mobile.

 */