var botao = document.querySelector('#buscar-paciente');

botao.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        var erro = document.querySelector('#erro-ajax');

        if (xhr.status === 200) {
            erro.classList.add('hide');
            
            var json = JSON.parse(xhr.responseText);

            json.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        } else {            
            erro.classList.remove('hide');
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});