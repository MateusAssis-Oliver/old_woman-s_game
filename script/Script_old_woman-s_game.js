$(document).ready(function() {

    //1- pegando o id da classe clicada
    //2 - monitorando todas as divs com a classe casa
    $(".casa").click(function() {

        // capturando o id da classe clicada
        /* id recebe a class casa como o  attr 
        que retorna o valor do elemento atribuido a ele como o id  */
        let id = $(this).attr("id")

        $('#' + id).css('background', 'red')
        console.log(id);

    });
});