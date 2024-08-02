const imgs = document.querySelectorAll('.flex-span img');

imgs.forEach(img => {
    const coracaoVazio = './img/coraçao.svg';
    const coracaoCheio = './img/coracao_preenchido.svg';

    img.addEventListener('click', () => {
        (img.getAttribute('src') === coracaoVazio) ? img.setAttribute('src', coracaoCheio) : img.setAttribute('src', coracaoVazio);
    })
});


const linksAcesso = document.querySelectorAll('#links_acesso');

linksAcesso.forEach(link => {
    link.addEventListener('mouseover', () => {
        if (link.hasAttribute('class')) {
            link.removeAttribute('class');
        } else {
            link.setAttribute('class', 'back_color_click');
        }
    })
});

