var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', function(){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');

    var paciente = obterPaciente(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeErros(erros);
        return;
    }

    adicionaPacienteTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector('#mensagem-erro');
    mensagensErro.innerHTML = '';
});

function adicionaPacienteTabela(paciente){
    var pacienteTr = criaTrPaciente(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function criaTrPaciente(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(criaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(criaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(criaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(criaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(criaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function criaTd(conteudo, classe){
    var td = document.createElement("td");
    td.textContent = conteudo,
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push('Peso inválido!');
    }

    if (!validaAltura(paciente.altura)){
        erros.push('Altura inválida!');
    }

    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}