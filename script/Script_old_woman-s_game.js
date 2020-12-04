// contante criada para agrupar as funçoes deo jogo 
const old_woman_s_game = {

    //Simplismente add a imagem no quadro selecionado
    addImg: (parametro, jogador) => {

        let idDiv = '#' + parametro;
        let img = $(`${idDiv} img `).attr('id');

        //controle, para evitar loops de imgs
        if (img === `img_${parametro}`) { old_woman_s_game.removeImg(img); return 0; }

        //adiona a img na div cricada
        $(idDiv).append(`<img src="../imgs/O.png" alt="" calss='${jogador}'id='img_${parametro}' >`)

        //chamada de func para reajustar a img na div
        old_woman_s_game.image_scaling(idDiv)

    },
    //reescreve a escala da imagem para não utrappasar as linhas
    image_scaling: (idDiv) => {

        let idImg = '#' + $(`${idDiv} img`).attr('id');
        $(`${idImg}`).css({ 'max-height': '100%', 'max-width': '100%', 'margin-top': '50px' })
    },
    vezJogagdor: () => {

    },
    removeImg: (parametro) => {
        let idImg = '#' + parametro;
        $(idImg).remove();
    },
    vezJogador: () => {

    }
}

$(document).ready(function() {

    //1- pegando o id da classe clicada
    //2 - monitorando todas as divs com a classe casa
    $(".casa").click(function() {
        // capturando o id da classe clicada
        /* id recebe a class casa como o  attr 
        que retorna o valor do elemento atribuido a ele como o id  */
        let id = $(this).attr("id")
        old_woman_s_game.addImg(id)


    });
});