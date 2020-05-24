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
});