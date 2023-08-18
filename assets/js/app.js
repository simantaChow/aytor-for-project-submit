$(function () {

    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        dotsClass:'banner_slider_dots',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
    });

    $('.slider').slick({
        prevArrow:'<i class="fa-solid fa-chevron-left slider_arrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right slider_arrow"></i>',
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 4,
    })

    $('.offer_card_slide').slick({
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 2,
        dots:true,
        arrows:false,
        dotsClass:'offer_card_slider_dots',
        infinite: true,
        autoplaySpeed:2000,
    })
    

    $('.best_seller_products_slider').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 4,
    });

    //countdown
    $('.clock').countdown('2023/07/30', function(event) {
        var $this = $(this).html(event.strftime(''        
          + `<div> <span class="d-block"> %d </span><span class="d-block"> Days </span></div>`
          + `<span class="clone">:</span>`
          + `<div> <span class="d-block"> %H </span><span class="d-block"> Hours </span></div>`
          + `<span class="clone">:</span>`
          + `<div> <span class="d-block"> %M </span><span class="d-block"> Minutes </span></div>`
          + `<span class="clone">:</span>`
          + `<div> <span class="d-block"> %S </span> <span class="d-block"> Seconds </span>
      </div>`));
      });

      $('.lts_news_slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 4,
        dots:true,
        arrows:false,
        dotsClass:'lts_news_card_slider_dots',
        infinite: true,
        autoplaySpeed:2000,
    })


});

new VenoBox({
    selector:'.video_btn'
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
