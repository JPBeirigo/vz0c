/* 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem
de fundo correspondente

1º Passo - dar um jeito de pegar o elemento HTML dos botões
2º Passo - dar um jeito de identificar o clique do usuário no botão
3º Passo - desmarcar o botão selecionado anteriormente
4º Passo - marcar o botão clicado como o novo selecionado 
5º Passo - esconder a imagem anterior
6º Passo - fazer aparecer a imagem correspondente ao botão clicado
*/

//1º Passo - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// 2º Passo - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // 3º Passo - desmarcar o botão selecionado anteriormente
        desativarBotaoSelecionado();

        // 4º Passo - marcar o botão clicado como o novo selecionado 
        selecionarBotaoCarrosel(botao);

        // 5º Passo - esconder a imagem anterior
        esconderImagemAtiva();

        // 6º Passo - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

// Refatoração (ajeitar código, similar a criar Structs em C)
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

