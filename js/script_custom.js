$(document).ready(function () {
    $('body').scrollspy({ target: '.navbar' });    
    $(".navbar-light").css({
        "cssText" : "background-color : rgba(34,64,224,0.8) !important"
    });

    var tamanhoTela = $(window).width(); 
    var posLoad = $(window).scrollTop();
        var alturaLoad = 50;

        if (alturaLoad < posLoad){
            
            $(".navbar-light").css({
                "cssText" : "background-color : rgba(34,64,224,0.8) !important"
            });
            $(".navbar-light .navbar-nav>li>a").css("line-height", "25px");
            $(".navbar-light .navbar-brand").css("line-height", "25px");
        } else {
            $(".navbar-light").css({
                "cssText" : "background-color : rgba(34,64,224,0.1) !important"
            });
            $(".navbar-light .navbar-nav>li>a").css("line-height", "20px");
            $(".navbar-light .navbar-brand").css("line-height", "20px");
        }

        $(window).scroll(function(){                  
            var alturaMax = 50;        
            var posicao = $(window).scrollTop();

            if (alturaMax < posicao){
                $(".navbar-light").css({
                    "cssText" : "background-color : rgba(34,64,224,0.8) !important"
                });
                $(".navbar-light .navbar-nav>li>a").css("line-height", "25px");
                $(".navbar-light .navbar-brand").css("line-height", "25px");
            } else {
                $(".navbar-light").css({
                    "cssText" : "background-color : rgba(34,64,224,0.1) !important"
                });
                $(".navbar-light .navbar-nav>li>a").css("line-height", "20px");
                $(".navbar-light .navbar-brand").css("line-height", "20px");
            }
        });

    $("#somos").on("click", function (e) {
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $("#somos").addClass("active");
        $('html, body').stop().animate({
            scrollTop: $(".enterprise").offset().top - 80
        }, 800);    
    });
    $("#servicos").click(function (e) { 
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $("#servicos").addClass("active");
        $('html, body').stop().animate({
            scrollTop: $(".services").offset().top - 80
        }, 800);        
    });
    $("#onde").click(function (e) { 
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $("#onde").addClass("active");  
        $('html, body').stop().animate({
            scrollTop: $(".google-map").offset().top - 80
        }, 800);     
    });
    $("#fale").click(function (e) { 
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $("#fale").addClass("active");  
        $('html, body').stop().animate({
            scrollTop: $(".talk").offset().top - 80
        }, 800);       
    });

    $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: true,
        autoWidth: false,
        autoHeight: false,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        mouseDrag: false,
    })

    /* ============= slider =============== */

    /* if (tamanhoTela < 500){
        $("#cloudslider-index").cloudSlider({
            width: 1333,
            height: 1200,
            onHoverPause: false,
            fullWidth: true,
            progressBarPosition: "bottom",
            progressBarColor: "rgba(0,0,0,0.5)"
        });

        $("#cloudslider").cloudSlider({
                width: 1333,
                height: 600,
                fullWidth: true
        });

        $("#cloudslider-cli").cloudSlider({
            width: 1000,
            height: 400,
            fullWidth: true,
            autoSlide: true,
            progressBarPosition: 'hide',
            onHoverPause: false,
            cli_carousel: {
                    itemSize		: {
                            width: 310,		    
                            height: 210		    
                    },
                    arrow			: {
                            visibility	: 'hide'
                    },
                    overlay			: '-25%',  
                    duration		: 6000,	
                    easing			: 'linear',
                    delay			: 1	   
            }
        });

    }else if (tamanhoTela <= 600){
        $("#cloudslider-index").cloudSlider({
            width: 1333,
            height: 1000,
            onHoverPause: false,
            fullWidth: true,
            progressBarPosition: "bottom",
            progressBarColor: "rgba(0,0,0,0.5)"
        });

        $("#cloudslider").cloudSlider({
                width: 1333,
                height: 500,
                fullWidth: true
        });

        $("#cloudslider-cli").cloudSlider({
            width: 1100,
            height: 370,
            fullWidth: true,
            autoSlide: true,
            progressBarPosition: 'hide',
            onHoverPause: false,
            cli_carousel: {
                    itemSize		: {
                            width: 310,		   
                            height: 210		   
                    },
                    arrow			: {
                            visibility	: 'hide'
                    },
                    overlay			: '-25%',  
                    duration		: 6000,	
                    easing			: 'linear',
                    delay			: 1	   
            }
        });

    }else if (tamanhoTela < 768){
        $("#cloudslider-index").cloudSlider({
            width: 1333,
            height: 800,
            onHoverPause: false,
            fullWidth: true,
            progressBarPosition: "bottom",
            progressBarColor: "rgba(0,0,0,0.5)"
        });

        $("#cloudslider").cloudSlider({
                width: 1333,
                height: 400,
                fullWidth: true
        });

        $("#cloudslider-cli").cloudSlider({
            width: 1300,
            height: 330,
            fullWidth: true,
            autoSlide: true,
            progressBarPosition: 'hide',
            onHoverPause: false,
            cli_carousel: {
                    itemSize		: {
                            width: 310,		   
                            height: 210		   
                    },
                    arrow			: {
                            visibility	: 'hide'
                    },
                    overlay			: '-25%',  
                    duration		: 6000,	
                    easing			: 'linear',
                    delay			: 1	   
            }
        });

    }else if (tamanhoTela >= 768){

        $("#cloudslider-index").cloudSlider({
            width: 1333,
            height: 740,
            onHoverPause: false,
            fullWidth: true,
            progressBarPosition: "bottom",
            progressBarColor: "rgba(0,0,0,0.5)"
        });

        $("#cloudslider").cloudSlider({
                width: 1333,
                height: 300,
                fullWidth: true
        });

        $("#cloudslider-cli").cloudSlider({
            width: 1900,
            height: 300,
            fullWidth: true,
            autoSlide: true,
            progressBarPosition: 'hide',
            onHoverPause: false,
            cli_carousel: {
                    itemSize		: {
                            width: 310,		   
                            height: 210		   
                    },
                    arrow			: {
                            visibility	: 'hide'
                    },
                    overlay			: '-30%',  
                    duration		: 6000,	
                    easing			: 'linear',
                    delay			: 1	   
            }
        }); */

        var posLoad = $(window).scrollTop();
        var alturaLoad = 50;
    

});