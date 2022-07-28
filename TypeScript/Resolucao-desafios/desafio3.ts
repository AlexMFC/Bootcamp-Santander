export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLUnknownElement;

let saldo = 0;

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
       saldo += soma;
        campoSaldo.innerHTML =saldo.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = '';
}

function limparSaldo() {
    if (campoSaldo) {
       saldo = 0;
        campoSaldo.innerHTML =saldo.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value)); //transforma soma.value em tipo number
    });
}



if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}