document.addEventListener("DOMContentLoaded", function() {
    var botoes = document.querySelectorAll('.buttons button');
    var paragrafos = document.querySelectorAll('.topics p');

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Oculta todos os parágrafos
            paragrafos.forEach(function(paragrafo) {
                paragrafo.style.display = 'none';
            });

            // Obtém o ID do botão clicado
            var idDoBotao = botao.id.replace('Btn', ''); // Remove 'Btn' do ID do botão
            // Mostra o parágrafo correspondente ao ID do botão clicado
            var paragrafoSelecionado = document.getElementById(idDoBotao);
            if (paragrafoSelecionado) {
                paragrafoSelecionado.style.display = 'block';
            }
        });
    });
});
