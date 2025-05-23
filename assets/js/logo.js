const html = document.querySelector('.html');
const css = document.querySelector('.css');
const javascript = document.querySelector('.javascript');
const python = document.querySelector('.python');
const git = document.querySelector('.git');
const github = document.querySelector('.github');
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
    text.innerHTML += '<p>Tenho 4 meses experiência, criando páginas estilizadas e responsivas.</p><br>';
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
    text.innerHTML += '<p>Atualmente estou estudando JavaScript e já compreendo os conceitos iniciais da linguagem.</p><br>';
    text.innerHTML += '<p>Tenho praticado bastante lógica de programação e fundamentos como arrays, objetos, funções, operadores e outras estruturas básicas, buscando evoluir constantemente na linguagem.</p>';
});

javascript.addEventListener('mouseleave', function() {
    javascript.src = 'img/logos-habilidades/javascript-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});

python.addEventListener('mouseenter', function() {
    python.src = 'img/logos-habilidades/python-cor.svg';
    text.innerHTML = '<h3>Python</h3><br>';
    text.innerHTML += '<p>Tenho 3 meses de experiência com a linguagem Python, durante os quais pratiquei bastante a lógica de programação e resolvi dezenas de exercícios.</p><br>';
    text.innerHTML += '<p>Estou familiarizado com conceitos como variáveis, estruturas de repetição, condicionais e manipulação de dados.</p>';
});

python.addEventListener('mouseleave', function() {
    python.src = 'img/logos-habilidades/python-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});

git.addEventListener('mouseenter', function() {
    git.src = 'img/logos-habilidades/git-cor.svg';
    text.innerHTML = '<h3>Git</h3><br>';
    text.innerHTML += '<p>Git é um sistema de controle de versão usado para acompanhar mudanças no código-fonte durante o desenvolvimento de software.</p><br>';
    text.innerHTML += '<p>Tenho conhecimentos básicos no uso do Git, como iniciar repositórios, realizar commits, criar branches e acompanhar o histórico de alterações.</p>';
});

git.addEventListener('mouseleave', function() {
    git.src = 'img/logos-habilidades/git-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});

github.addEventListener('mouseenter', function() {
    github.src = 'img/logos-habilidades/github-cor.svg';
    text.innerHTML = '<h3>GitHub</h3><br>';
    text.innerHTML += '<p>GitHub é uma plataforma online que permite armazenar e gerenciar repositórios Git na nuvem, facilitando o trabalho colaborativo entre desenvolvedores.</p><br>';
    text.innerHTML += '<p>Tenho familiaridade com os principais recursos, como clonar projetos, subir arquivos, e colaborar por meio de pull requests.</p>'
});

github.addEventListener('mouseleave', function() {
    github.src = 'img/logos-habilidades/github-logo.svg';
    text.innerHTML = 'Passe o mouse por cima para saber mais';
});