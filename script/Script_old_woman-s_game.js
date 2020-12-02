function circulo(parametro) {

    let idDiv = '#' + parametro;

    //controle de loop de divs desnecesarias
    if ($(`${idDiv} div `).attr('id') === `elemento_${parametro}`) { return 0; }
    console.log($(`${idDiv} div `).attr('id'))

    console.log(` idDiv - ${idDiv}`)

    //add div dentro do id 
    $(idDiv).append(`<div id='elemento_${parametro}'> </div>`)

    let idDivC = '#' + $(`${idDiv} div`).attr('id')
    console.log(` idDivC - ${idDivC}`)

    $(idDivC).css({
        'width': '50px',
        'height': '50px',
        'background': 'blue',
        'borderRadius': '1000px',
        'margin': ' 50% auto'
    })

    return 0;
}



$(document).ready(function() {

    //1- pegando o id da classe clicada
    //2 - monitorando todas as divs com a classe casa
    $(".casa").click(function() {
        // capturando o id da classe clicada
        /* id recebe a class casa como o  attr 
        que retorna o valor do elemento atribuido a ele como o id  */
        let id = $(this).attr("id")
        circulo(id)
        console.log(id);

    });
});