const html = document.querySelector('.html');
const css = document.querySelector('.css');
const javascript = document.querySelector('.javascript');
const text = document.querySelector('#hab-text');

html.addEventListener('mouseenter', function() {
    html.src = 'img/logos-habilidades/html-cor.svg';
    text.innerHTML = '<h3>HTML 5</h3><br>';
    text.innerHTML += '<p>Linguagem de marcação usada para estruturar páginas web.</p><br>';
    text.innerHTML += '<p>Tenho 4 meses experiência, criando páginas responsivas e semânticas.</p><br>';
    text.innerHTML += '<p>Utilizado em todos os meus projetos no Curso em Vídeo e no portfólio atual.</p>';
});

html.addEventListener('mouseleave', function() {
    html.src = 'img/logos-habilidades/html-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});

css.addEventListener('mouseenter', function() {
    css.src = 'img/logos-habilidades/css-cor.svg';
    text.innerHTML = '<h3>CSS 3</h3><br>';
    text.innerHTML += '<p>Linguagem de marcação usada para estilizar páginas web.</p><br>';
    text.innerHTML += '<p>Tenho 4 meses experiência, criando páginas responsivas e semânticas.</p><br>';
    text.innerHTML += '<p>Utilizado em todos os meus projetos no Curso em Vídeo e no portfólio atual.</p>';
});

css.addEventListener('mouseleave', function() {
    css.src = 'img/logos-habilidades/css-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});

javascript.addEventListener('mouseenter', function() {
    javascript.src = 'img/logos-habilidades/javascript-cor.svg';
    text.innerHTML = '<h3>Javascript</h3><br>';
    text.innerHTML += '<p>Linguagem de programação muito usada para páginas web.</p><br>';
});

javascript.addEventListener('mouseleave', function() {
    javascript.src = 'img/logos-habilidades/javascript-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});