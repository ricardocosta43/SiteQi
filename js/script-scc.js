$(document).ready(function(){
    
    $('body').scrollspy({ target: '.navbar' });
    
    var ativo =  $(".tec-sobre").attr('class');
    var url = window.location.href;
    if (ativo === 'tec-sobre active' && url.indexOf('#sobre') === -1){ /* -1 é pq nao encontrou */
        $(".tec-sobre").removeClass('active'); // ver se vai funcionar
        $(".tec-inicio").addClass('active');
    };

    $(".navbar-default").css("background-color", "rgba(34,64,224,0.1)");

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

        if (alturaLoad < posLoad){
            $(".navbar-default").css("background-color", "rgba(34,64,224,0.8)");
            $(".navbar-default .navbar-nav>li>a").css("line-height", "25px");
            $(".navbar-default .navbar-brand").css("line-height", "25px");
        } else {
            $(".navbar-default").css("background-color", "rgba(34,64,224,0.1)");
            $(".navbar-default .navbar-nav>li>a").css("line-height", "20px");
            $(".navbar-default .navbar-brand").css("line-height", "20px");
        }

        $(window).scroll(function(){                  
            var alturaMax = 50;        
            var posicao = $(window).scrollTop();

            if (alturaMax < posicao){
                $(".navbar-default").css("background-color", "rgba(34,64,224,0.8)");
                $(".navbar-default .navbar-nav>li>a").css("line-height", "25px");
                $(".navbar-default .navbar-brand").css("line-height", "25px");
            } else {
                $(".navbar-default").css("background-color", "rgba(34,64,224,0.1)");
                $(".navbar-default .navbar-nav>li>a").css("line-height", "20px");
                $(".navbar-default .navbar-brand").css("line-height", "20px");
            }
        });

    }
    /*  -------------------------------------------------------------------- */     
    
    $('.tec-sobre').click(function(){
        $('body, html').animate({scrollTop: $('#sobre').offset().top}, 500);
    });
    
    $('.tec-inicio').click(function(){
        $('body, html').animate({scrollTop: $('body').offset().top}, 500);
    });
           
    $('.tec-clientes .imagem, .hint').tooltip({ placement: 'top'});
    
    
    $("#cep").blur(function() {
        /*nova variável "cep" somente com dígitos.*/
        var cep = $(this).val().replace(/\D/g, '');

        if (cep != "") {            
            /*Expressão regular para validar o CEP.*/
            var validacep = /^[0-9]{8}$/;
            /*Valida o formato do CEP.*/
            if(validacep.test(cep)) {

                $('.loader').css({display: "block"});

                /*Consulta o webservice viacep.com.br/*/
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        $("#endereco").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $('.loader').css({display: "none"});
                    } /*end if*/
                    else {
                        /*CEP pesquisado não foi encontrado*/
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                        $('.loader').css({display: "none"});
                    }
                });
            } /*end if*/
            else {
                /*cep é inválido*/
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
                $('.loader').css({display: "none"});
            }
        } /*end if*/
        else {
            /*cep sem valor, limpa formulário*/
            limpa_formulário_cep();
            $('.loader').css({display: "none"});
        }
    });        
    
    $('#nascimento').datepicker({
        language: "pt-BR",
        autoclose: true,
        toggleActive: true,
        orientation: "bottom auto"
    });
    
    $('#cep').inputmask({ mask: '99999-999' });
    $('#nascimento').inputmask({ mask: '99/99/9999' });
    
    
    $('#telefone').focusin(function(){
        var element;
        element = $(this);        
        element.mask("(99) 99999-9999");
        element.select();
    });
    
    $('#telefone').blur(function(){
        var phone, element;
        
        element = $(this);
        element.unmask();        
        phone = element.val().replace(/\D/g, '');
        
        if(phone.length > 10) {
            element.mask("(99) 99999-9999");
        } else {
            element.mask("(99) 9999-9999");
        }        
    });    
    
    
    $('.nav-tabs li a').click(function(){
        var tamanhoTela = $(window).width();
        
        if (tamanhoTela > 991){
            $('body, html').animate({scrollTop: $('#tec-sistemas-cab').offset().top}, 500);
        }
    });


    /* fazer login */    
    $('.login-area').click(function (e) {
        e.preventDefault();

        var dados = $("#fmLogin").serialize(); 
        //var dados = '{"username":"' + $("#username").val() + '","password":"' + $("#password").val() + '"}';
		
        $.post({
            type: "POST",
            url: "/login",
            data: dados,
            //async: true,
			//contentType: "application/json; charset=utf-8",
            dataType: "json",
			
            beforeSend: function () {
                $('.login-area').addClass('disabled');
                $('.post-login').css({display: "block"});
                $('#message_login').css({display: "none"});
            },
            complete: function () {
                $('.post-login').css({display: "none"});
                $('.login-area').removeClass('disabled');
            },
            success: function (data) {
                if (data === 'ok'){
                    window.location.href = "/admin";
                }else{
                    $('#message_login').css({display: "block"});
                    $("#message_login").html(data);
                }             
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('#message_login').css({display: "block"});
                $("#message_login").html('Deu erro -----> ' + xhr.status + ' - ' + thrownError);
                $('.modal input[name=username], .modal input[name=password]').val('');
            }
        });
    });

    
    $('.modal').on('hidden.bs.modal', function(){
        $('#message_login').css({display: "none"});
        $('.modal input[name=username], .modal input[name=password]').val('');
        $('.modal .form-group').removeClass('has-error');
        $('body a').focusout();
        $('.login-forgot-msg').css({display: "none"});
        $('.login-forgot').css({display: "none"});
        $('.login-ok').css({display: "block"});
    });
    
    /* faz a tela de sistema rolar caso seja carregada com parametro */
    var sistema = $('.sis-action').val();
    if (sistema === 'financeiro'){
        $('.fin-action').click();
    }else if (sistema === 'comercial'){
        $('.com-action').click();
    }else if (sistema === 'adm'){
        $('.adm-action').click();
    }else if (sistema === 'pcp'){
        $('.pcp-action').click();
    }
    
    /* refresh captcha */
    $('.refreshCaptcha').click(function() { 
        $.ajax({ 
            url: '/contatoTrab/refresh', 
            dataType:'json', 
            beforeSend: function () { 
                $('.captcha-form img').css({opacity: "0"});
            },
            complete: function () {
                $('.captcha-form img').css({opacity: "1"});
            },
            success: function(data) {
                $('.captcha-form img').attr('src', data.src); 
                $('input[name="captcha[id]"]').attr('value', data.id); 
            }
        }); 
    });
    $('.refreshCaptcha').tooltip({ placement: 'top'});    
           
    
    /* alterar login */
    $('.esqueci').click(function(){        
        $('.login-ok').css({display: "none"});
        $('.login-forgot').css({display: "block"});
    });
    
    $('.btn-forgot-voltar').click(function(){ 
        $('.login-forgot').css({display: "none"});
        $('.login-forgot-msg').css({display: "none"});
        $('.login-ok').css({display: "block"});
    });
    
    $('.btn-forgot').on('click', function(){
        /* pegar email */
        var dados = $(".email-forgot").serialize();
              
        $.ajax({
            type: "POST",
            url: "/forgotpassword",
            async: true,
            data: dados,
            dataType: "json",
            beforeSend: function () {                            
                $('.btn-forgot').addClass('disabled');
                $('.post-login').css({display: "block"});
                $('#message-forgot').css({display: "none"});
            },
            complete: function () {
                $('.post-login').css({display: "none"});
                $('.btn-forgot').removeClass('disabled');   
            },
            success: function (data) {
                if (data === 'ok'){
                    $('.login-forgot').css({display: "none"});
                    $('.login-forgot-msg').css({display: "block"});                    
                }else{
                    $('#message-forgot').css({display: "block"});
                    $('#message-forgot1').html(data);
                } 
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#message_login").html('Deu erro -----> ' + xhr.status + ' - ' + thrownError);
            }
        });
    });
        
    
    
});

function HideShow() {
    $(document).ready(function() {        
        $(".slideMe").slideToggle();
    });
}

