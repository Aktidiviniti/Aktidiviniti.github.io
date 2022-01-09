$(document).ready(function(){
    $('.carousel__inner').slick({
        arrows: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left_arrow.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right_arrow.png"></button>',
        responsive: [
            {
              breakpoint: 660,
              settings: {
                arrows: false,
                dots:true, 
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 2000,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
          ]
        });
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        $(".catalog-item__link").each(function(i){
          $(this).on('click',function(e){
            e.preventDefault();
            $(".catalog-item__main").eq(i).toggleClass("catalog-item__main_active");
            $(".catalog-item__second").eq(i).toggleClass("catalog-item__second_active");
          })
        });
        $(".catalog-item__back").each(function(i){
          $(this).on('click',function(e){
            e.preventDefault();
            $(".catalog-item__main").eq(i).toggleClass("catalog-item__main_active");
            $(".catalog-item__second").eq(i).toggleClass("catalog-item__second_active");
          })
        });
        //modal
        $("[data-modal=consultation]").on("click", function(){
          $(".overlay, #consultation").fadeIn();
        })
        $(".catalog-item__button").each(function(i){
          $(this).on("click",function(){
            $("#order .modal__subtitle").text($(".catalog-item__title").eq(i).text())
            $(".overlay, #order").fadeIn(500);
          })
        });
        $(".modal__close").on("click",function(){
          $(".overlay, #consultation, #order, #thanks").fadeOut();
        });
            // validate
        function ValidateForm(form){
          $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 2
              },
              phone:"required",
              email: {
                required: true,
                email: true,
              }
            },
            messages: {
              name:{       
              required: "Введите своё имя",
              minlength: jQuery.validator.format("Необходимо {0} символa"),
              },
              phone: "Введите номер вашего телефона",
              email: {
                required: "Введите свой e-mail",
                email: "Неправильный формат"
              }
            }
          });
        };
        ValidateForm("#order .feed-form");
        ValidateForm("#consultation .feed-form");
        ValidateForm("#consultation-form");
        $("input[name=phone]").mask("+7 (999) 999-99-99");

        $("form").submit(function(e){
          e.preventDefault();
          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function(){
            $(this).find("input").val("");
            $("#consultation, #order").fadeOut();
            $(".overlay, #thanks").fadeIn();

            $("form").trigger("reset");
          });
          return false;
        });
        //scroll
        $(window).scroll(function(){
          ($(this).scrollTop()>1600)? $(".page-up").fadeIn() : $('.page-up').fadeOut();
        });
        $("a[href='#up']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
        new WOW().init();
});
