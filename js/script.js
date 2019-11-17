$(document).ready(function(){
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: true
    });

    $('.menu__gumb').on('click', function() {
        $('.header .menu ul').slideToggle(500);
    });
  });