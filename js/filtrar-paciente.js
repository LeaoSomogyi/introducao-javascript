var filtro = document.querySelector('#filtro');

filtro.addEventListener('input', function () {
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            var regex = new RegExp(this.value, 'i');

            if (!regex.test(nome)) {
                paciente.classList.add('hide');
            } else {
                paciente.classList.remove('hide');
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('hide');
        }
    }
});