document.addEventListener('DOMContentLoaded', function () {
    // Operadores básicos
    var numero1 = 40;
    var numero2 = 10;

    // Adição
    var resultadoAdicao = numero1 + numero2;
    document.getElementById('adicao').innerHTML = 'Adição: ' + resultadoAdicao;
    alert('Resultado da Adição: ' + resultadoAdicao);
    console.log('Resultado da Adição:', resultadoAdicao);

    // Subtração
    var resultadoSubtracao = numero1 - numero2;
    document.getElementById('subtracao').innerHTML = 'Subtração: ' + resultadoSubtracao;
    alert('Resultado da Subtração: ' + resultadoSubtracao);
    console.log('Resultado da Subtração:', resultadoSubtracao);

    // Multiplicação
    var resultadoMultiplicacao = numero1 * numero2;
    document.getElementById('multiplicacao').innerHTML = 'Multiplicação: ' + resultadoMultiplicacao;
    alert('Resultado da Multiplicação: ' + resultadoMultiplicacao);
    console.log('Resultado da Multiplicação:', resultadoMultiplicacao);

    // Divisão
    var resultadoDivisao = numero1 / numero2;
    document.getElementById('divisao').innerHTML = 'Divisão: ' + resultadoDivisao;
    alert('Resultado da Divisão: ' + resultadoDivisao);
    console.log('Resultado da Divisão:', resultadoDivisao);
});
