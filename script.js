$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        slideBy:1,
        touchDrag:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive: {
            0: {
                items:1,
                nav:false
            },
            600: {
                items:2,
                nav:false
            },
            1000: {
                items:3,
                nav:false
            },
            1250: {
                items:5,
                nav:false
            },
        }
    });
  }); 

  $(document).ready(function(){
    $(".owl-carousel2").owlCarousel({
        loop:true,
        slideBy:1,
        touchDrag:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive: {
            0: {
                items:1
            },
            600: {
                items:1
            },
            1000: {
                items:1
            },
        }
    });
  }); 