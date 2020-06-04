$(document).ready(function () {
    $('body').scrollspy({ target: '.navbar' });
    $(".navbar-light").css({
        "cssText": "background-color : rgba(0,34,56,0.9) !important"
    });

    var tamanhoTela = $(window).width();
    var posLoad = $(window).scrollTop();
    var alturaLoad = 50;

    if (alturaLoad < posLoad) {

        $(".navbar-light").css({
            "cssText": "background-color : rgba(0,34,56,0.9) !important"
        });
        $(".navbar-light .navbar-nav>li>a").css("line-height", "25px");
        $(".navbar-light .navbar-brand").css("line-height", "25px");
    } else {
        $(".navbar-light").css({
            "cssText": "background-color : rgba(0,34,56,0.4) !important"
        });
        $(".navbar-light .navbar-nav>li>a").css("line-height", "20px");
        $(".navbar-light .navbar-brand").css("line-height", "20px");

    }

    $(window).scroll(function () {
        var alturaMax = 50;
        var posicao = $(window).scrollTop();

        if (alturaMax < posicao) {
            $(".navbar-light").css({
                "cssText": "background-color : rgba(0,34,56,0.9) !important"
            });
            $(".navbar-light .navbar-nav>li>a").css("line-height", "25px");
            $(".navbar-light .navbar-brand").css("line-height", "25px");
        } else {
            $(".navbar-light").css({
                "cssText": "background-color : rgba(0,34,56,0.4) !important"
            });
            $(".navbar-light .navbar-nav>li>a").css("line-height", "20px");
            $(".navbar-light .navbar-brand").css("line-height", "20px");
        }
    });

    $("#inicio").on("click", function (e) {
        e.preventDefault();
        $(".nav-item").removeClass("active");
        $("#inicio").addClass("active");
        $('html, body').stop().animate({
            scrollTop: $("body").offset().top - 80
        }, 800);
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

    /* $('.owl-carousel').owlCarousel({
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
    }) */

    /* ============= slider =============== */

    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const auto = true; // Auto scroll
    const intervalTime = 10000;
    let slideInterval;

    const nextSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for next slide
        if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
        } else {
            // Add current to start
            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    };

    const prevSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for prev slide
        if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
        } else {
            // Add current to last
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    };

    // Auto slide
    if (auto) {
        // Run next slide at interval time
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    /* notificação */

    

});

function notSuccess(){
    notif({
        msg: "Email enviado com sucesso!",
        type: "success"
    });
}

function notError(){
    notif({
        msg: "Algo deu errado. Varifique os dados!",
        type: "error"
    });
}