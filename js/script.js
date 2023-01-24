"use strict"

const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");

backBtn.addEventListener("click", () => {
    document.getElementById('container').style.minHeight = '320px';
    form.classList.remove('secActive')
});

document.getElementById("incluirBtn").onclick = function () {
    document.getElementById('termo').style.visibility = 'visible';

    const table = document.getElementById("teste");
    table.style.border = 0;

    const row = table.insertRow(-1);
    const tipo = row.insertCell(0);
    const numero = row.insertCell(1);
    const imei = row.insertCell(2);
    tipo.innerHTML = document.getElementById("tipo_marca1").value;
    numero.innerHTML = document.getElementById("numero_modelo1").value;
    imei.innerHTML = document.getElementById("imei1").value;
}

document.getElementById("submit1").onclick = function () {

    const empresa = document.getElementById('empresa').value;
    const colaborador_nome = document.getElementById('colaborador_nome').value;
    const colaborador_cpf = document.getElementById('colaborador_cpf').value;

    if (empresa == 'Adconmed') {
        document.getElementById('instituicao2').innerHTML = 'NOVOA EMPREENDIMENTOS, ASSESSORIA, CONSULTORIA E SERVIÇOS LTDA EPP.'
        document.getElementById('logo').src = 'img/adconmed.png';
        document.getElementById('logo').style.width = '100px'
    }
    else if (empresa == 'Osan') {
        document.getElementById('instituicao2').innerHTML = 'OSAN PLANOS LTDA.'
        document.getElementById('logo').src = 'img/osan.png';
        document.getElementById('logo').style.width = '60px'
    }
    else if (empresa == 'Funerária') {
        document.getElementById('instituicao2').innerHTML = 'ORGANIZAÇÃO SOCIAL DE ATAÚDES NOVOA LTDA.'
        document.getElementById('logo').src = 'img/osan.png';
        document.getElementById('logo').style.width = '60px'
    }
    else {
        document.getElementById('instituicao2').innerHTML = 'OSANSEG CORRETORA DE SEGUROS E REPRESENTAÇÕES.'
        document.getElementById('logo').style.width = '110px'
        document.getElementById('logo').src = 'img/osanseg.png';
    }


    document.getElementById('colaborador_nome2').innerHTML = colaborador_nome;
    document.getElementById('colaborador_nome3').innerHTML = colaborador_nome;
    document.getElementById('colaborador_cpf2').innerHTML = colaborador_cpf;



    document.getElementById('termo').style.visibility = 'visible';

    form.classList.add('secActive');


    document.getElementById('container').style.minHeight = '10px';

    return false;
}


document.getElementById("submit2").onclick = function () {

    window.print();

    return false;
}


