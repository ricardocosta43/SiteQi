$(document).ready(function () {
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

    /* ============= slider =============== */

    var tamanhoTela = $(window).width(); 

    if (tamanhoTela < 500){
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
        });

        var posLoad = $(window).scrollTop();
        var alturaLoad = 50;
    }

});