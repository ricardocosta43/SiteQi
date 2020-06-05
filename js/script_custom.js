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
        

});

function notSuccess(message){
    notif({
        msg: message,
        type: "success"
    });
}

function notError(message){
    notif({
        msg: message,
        type: "error"
    });
}

/* =============== submit form ================ */


window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    function success() {
        form.reset();
        grecaptcha.reset(widgetId1);
        /* button.style = "display: none ";
        status.innerHTML = "Thanks!"; */

        /* fazer delay na resposta */
        setTimeout(function(){ 
            $("#my-form").css("display", "block");       
            $("#loader").css("display", "none"); 
            notSuccess("Email enviado com sucesso!");
        }, 2000);
    }

    function error() {
        /* status.innerHTML = "Oops! There was a problem."; */
        setTimeout(function(){ 
            $("#my-form").css("display", "block");       
            $("#loader").css("display", "none"); 
            notError("Algo deu errado. Varifique os dados!");
        }, 2000); 
        grecaptcha.reset(widgetId1);       
    }
    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();

        var message = document.getElementById("message");
        var reCaptcha = grecaptcha.getResponse(widgetId1);

        /* if (message.value.length < 3){
            return alert("ta errado");                    
        } */

        if (reCaptcha == "" || reCaptcha == null){
            return notError("Por favor verifique o reCaptcha.");  
        }

        $("#my-form").css("display", "none");       
        $("#loader").css("display", "block");

        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
        
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
