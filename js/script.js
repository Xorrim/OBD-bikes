$(document).ready(function () {
    $('.icon-menu').click(function () {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock'); // Заблокувати/розблокувати прокрутку сторінки
    });

    $('.menu__link').click(function () {
        $('.icon-menu').removeClass('active');
        $('.menu__body').removeClass('active');
        $('body').removeClass('lock');
    });
});





    function ibg(){
$.each($('.ibg'), function(index, val){
    if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
});
    }   
        ibg();



        