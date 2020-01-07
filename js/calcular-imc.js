var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var tdImc = paciente.querySelector('.info-imc');
    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);
    
    if (!pesoValido){
        tdImc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida){
        tdImc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido');
    }

    if (alturaValida && pesoValido) {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    } else {
        return false;
    }
}