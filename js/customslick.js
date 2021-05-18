$(document).ready(function(){
    $('.team_slider').slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplaySpeed:4000,
    autoplay:true,
    arrows:false,
             responsive: [
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 479,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
    }
  ]
        
});  
    
    
     //  scrolling spy
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    
    // Smoth Scrolling
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    
    
      // Sticky Top
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        var sticky = $(".sticky_top");
        if(scrolling >= 100){
           sticky.addClass("sadinav_bg"); 
        }
        else{
           sticky.removeClass("sadinav_bg");   
        }
    });
    
    //Scroll To Top
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#scroll_top').fadeIn();
        } else{
             $('#scroll_top').fadeOut();
        }
    });
    $("#scroll_top").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
    
    //Wow js
    new WOW().init();

    
    //Preloader Js
    $(window).on('load', function(){
        $('#preloader').delay(2000).fadeOut(500);
    });
    
    
});