$(function() {

    // $(function() {
    //     var index = 0;
    //     var len = $('ul li').lenght;
    //     var timer = 0;
    //     var width = $('ul>li').width;
    //     $('.uplbk>.uplb>.tian').clone(true).appendTo($('ul'));

    //     function run() {
    //         timer = setInterval(function() {
    //             $('ol li').eq(index).removeClass('active');
    //             index++;
    //             $('ol li').eq(index).addClass('active');
    //             if (index == len) {
    //                 $('ol li').eq(0).addClass('active')
    //             }
    //             $('ul').animate({
    //                 left: -index * width
    //             }, 500, function() {
    //                 if (index >= len) {
    //                     $(this).css('left', 0);
    //                     index = 0;
    //                 }
    //             });


    //         }, 1000);
    //     }
    //     run();
    //     $('.uplb ul').swipe(function() {
    //         clearInterval(timer);
    //     }).touchmove(function() {
    //         run();
    //     });



    // });



    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 500,
        loop: true
    });
});
