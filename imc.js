/*
.form = class
#form = id
 */

const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado("Peso inválido", false)
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false)
        return;
    }
    const imc = getImc(peso, altura);
    const nivelIMC = getNivelImc(imc);
    const msg = `Seu IMC é ${imc.toFixed(2)} (${nivelIMC})`

    setResultado(msg, true)

})

function getNivelImc(imc) {
    const nivel = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade 1', 'Obesidade 2(severa)', 'Obesidade 3(mórbida)'];

    if (imc < 17) { return nivel[0]; }
    else if (imc === 17 && imc < 18.49) { return nivel[1]; }
    else if (imc === 18.5 && imc < 24.99) { return nivel[2]; }
    else if (imc === 25 && imc < 29.99) { return nivel[3]; }
    else if (imc == 30 && imc < 34.99) { return nivel[4]; }
    else if (imc == 35 && imc < 39.99) { return nivel[5]; }
    else if (imc > 39.99) { return nivel[6]; }

    console.log(nivel.length);
}
function getImc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

function criaP() {
    const p = document.createElement('p'); //cria elemento p = paragrafo
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }
    else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}   