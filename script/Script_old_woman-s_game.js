// contante criada para agrupar as funçoes deo jogo 
const old_woman_s_game = {

    //Simplismente add a imagem no quadro selecionado
    addImg: (parametro, jogador) => {

        let jog = jogador;

        /* add o # para poder trabalhar com o id */
        let idDiv = '#' + parametro;

        let img = $(`${idDiv} img `).attr('id');

        //controle, para evitar loops de imgs
        if (img === `img_${parametro}`) { old_woman_s_game.removeImg(img); return 0; }

        //adiona a img na div cricada
        $(idDiv).append(`<img src="../imgs/O.png" alt="1" calss='${jogador}'id='img_${parametro}' >`);

        //chamada de func para reajustar a img na div
        old_woman_s_game.image_scaling(idDiv);

    },

    //reescreve a escala da imagem para não utrappasar as linhas
    image_scaling: (idDiv) => {

        let idImg = '#' + $(`${idDiv} img`).attr('id');
        

        /* modifica o tamanho da imagem original para não ocorre um overflow*/
        $(`${idImg}`).css({ 'max-height': '100%', 'max-width': '100%', 'margin-top': '50px' });

        old_woman_s_game.VerificarVencedor(idImg);
    },
    vezJogagdor: () => {


    },

    /* parametro recebe a casa clicada */
    removeImg: (parametro) => {
        /* remove a img da casa clicada  */
        let idImg = '#' + parametro;
        $(idImg).remove();

    },

    /* chamada da função feito dentro da func addImg */
    VerificarVencedor: (parametro) => { 
        let numCasa = 9;
        let aux = parametro;
      
        //id das img da casa clicada
        console.log(aux)

        /* pecorre as casas */
        /* Pura magica ne, sei... */
        for(let i = 1; i <= numCasa; i++){

            //usa o indice para pecorre as casas
            let casa = "#casa" + `${i}`;
            
            //entra na csa e busca o id da  img dela
            let teste = $(`${casa} img`).attr("id")
    
            console.log(teste)
        }
    }
};