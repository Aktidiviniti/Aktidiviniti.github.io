$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/slider__left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/slider__right.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            }
          }
        ]
});
    });
    $(".question__form").validate({
        rules: {
          name: "required",
          phone: 'required',
          email: 'required'
        },
        messages: {
          name: "введите ваше имя",
          phone: "введите ваш номер",
          email: "введите ваш e-mail"
        }
      });
let burger = document.querySelector(".burger"),
    navPanel = document.querySelector("nav"),
    black = document.querySelector(".black"),
    cross = document.querySelector(".cross");
function addActiveClick(elem, a, b){
  elem.addEventListener("click", () =>{
    elem.classList.toggle("active");
    a.classList.toggle("active");
    b.classList.toggle("active")
  });
}
function removeActive(elem, a, b, c){
  elem.addEventListener("click", () =>{
    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
  })
}
addActiveClick(burger, navPanel, black);
removeActive(cross, burger, navPanel, black);
if(document.documentElement.clientWidth < 993){
    document.querySelector('.footer__text').innerHTML = "Global Opt - Доставка грузов <br> из Китая в Россию и СНГ";
} 