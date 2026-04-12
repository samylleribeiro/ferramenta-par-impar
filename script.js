function verificarParImpar() {
    var numero =(document.getElementById('numero').value);
    var resultado  = document.getElementById('resultado');


    if (numero % 2 === 0) {
        resultado.textContent = `${numero} é um número par.`;
        resultado.style.color = 'blue';
      
    } else {
        resultado.textContent = `${numero} é um número ímpar.`;
        resultado.style.color = 'orange';
    }
}