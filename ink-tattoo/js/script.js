document.addEventListener("DOMContentLoaded", () => {
    let  frames = document.querySelectorAll(".about__img");
    let icons = document.querySelector(".icons");
    let num = 0;
    let gallery = document.querySelectorAll(".gallery__block");
    frames.forEach((i, n) =>{
        i.addEventListener("mouseover", (e) => {
             i.append(icons);
            icons.style.cssText = "opacity: 1";
        });
        i.addEventListener("mouseout", () => {
            icons.style.cssText = "opacity: 0";
        });
    });
    gallery.forEach((i, n) => {
        i.firstChild.src = `img/gallery__img${n+1}.jpg`;
    });
    let burger = document.querySelector(".burger"),
        logo = document.querySelector(".hidden__logo"),
        nav = document.querySelector(".nav");
    burger.addEventListener('click', () => {
        logo.classList.toggle("active");
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });
});