var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', (event) => {
    event.target.parentNode.classList.add('fade-out');
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});