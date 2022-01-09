'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('.content'),
        car = document.querySelector('.car'),
        startBtn = document.querySelector('.modal-start__button'),
        modalStart = document.querySelector('.modal-start'),
        modalEnd = document.querySelector('.modal__end'),
        textShow = document.querySelector('.text__row'),
        intro = document.querySelector('.intro'),
        introFirst = document.querySelector('.intro-first'),
        introSecond = document.querySelector('.intro-second'),
        result = document.querySelector('.result'),
        introButton1 = document.querySelector('.intro__button'),
        introButton2 = document.querySelector('.intro__button-second'),
        markov = document.querySelector('.modal-markov'),
        markovButtonOne = document.querySelector('.modal-markov__buttons-one'),
        markovButtonTwo = document.querySelector('.modal-markov__buttons-two'),
        markovText = document.querySelector('.modal-markov__descr p'),
        audio = document.querySelector('.audio'),
        playAudio = document.querySelector('.play__audio'),
        pauseAudio = document.querySelector('.pause__audio'),
        resultNum = 0;
        if(localStorage.getItem('result')){
            result.innerHTML = 'лучший результат' + ':' + ' ' + localStorage.getItem('result');
        }else{
            result.innerHTML = 'лучший результат' + ':' + ' ' + 0;
        }
    startBtn.addEventListener('click', () => {
        modalStart.classList.add('hidden');
        content.classList.add('active');
        stepText(textShow);
    });
    introButton1.addEventListener('click',() => {
        introFirst.style.display = 'none';
        introButton2.style.display = 'flex';
        introSecond.style.display = 'flex';
        let textShow = document.querySelector('.second-text__row');
        stepText(textShow);
    });
    introButton2.addEventListener('click', () => {
        intro.style.display = 'none';
        carMove();
        purpleCar.addCar();
        setTimeout(() => {
            showMarkov();
        }, 8000);
        setInterval(() => {
            showMarkov();
        }, 20000);
        setInterval(purpleCar.addCar.bind(purpleCar), 2000);
        setInterval(blueCar.addCar.bind(blueCar), 3500);
        setInterval(carSport.addCar.bind(carSport), 7000);
    });
    function carMove(){
         window.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.keyCode == '37' && car.classList.contains('right')){
                car.classList.remove('right');
                car.style.transform = "rotate(-10deg) translateX(-50%)";
                setTimeout(carFront, 150);
            } else if(e.keyCode == '37' ){
                car.classList.add('left');
                car.style.transform = "rotate(-10deg) translateX(-50%)";
                setTimeout(carFront, 150);
            } else if(e.keyCode == '39' && car.classList.contains('left')){
                car.classList.remove('left');
                car.style.transform = "rotate(10deg) translateX(-50%)";
                setTimeout(carFront, 150);
            } else if(e.keyCode == '39'){
                car.classList.add('right');
                car.style.transform = "rotate(10deg) translateX(-50%)";
                setTimeout(carFront, 150);
            }
        });
    }
    function carFront(){
        car.style.transform = "translateX(-50%) rotate(0deg)";
    }
    function stepText(text){
        let textArr = text.innerHTML.split('');
        text.innerHTML = '';
            textArr.forEach((i, n) => {
                setTimeout(() => {
                    text.innerHTML = text.innerHTML + i;
                }, n*130);
            });
    }
    function showMarkov(){
        markov.classList.add('modal-markov__active');
        markovButtonTwo.addEventListener('click', () => {
            if(markovButtonTwo.textContent == "да пошел ты на хуй!"){
                markov.classList.remove('modal-markov__active');
                setTimeout(() => {
                    showMarkov();
                }, 15000);
            }else{
                markov.classList.remove('modal-markov__active');
                setTimeout(showMarkov, 3000);
            }
        });
        markovButtonOne.addEventListener('click', () => {
            let random = +(Math.random() * 10).toFixed(0);
            switch(+random){
                case(0):
                    markovText.textContent = 'ТЕКСТ-1?!';
                    break;
                case(1):
                    markovText.textContent = 'ТЕКСТ-2?!';
                    break;
                case(2):
                    markovText.textContent = 'ТЕКСТ-3?!';
                    break;
                case(3):
                    markovText.textContent = 'ТЕКСТ-4?!';
                    break;
                case(4):
                    markovText.textContent = 'ТЕКСТ-5?!';
                    break;
                case(5):
                    markovText.textContent = 'ТЕКСТ-6?!';
                    break;
                case(6):
                    markovText.textContent = 'ТЕКСТ-7?!';
                    break;
                case(7):
                    markovText.textContent = 'ТЕКСТ-8?!';
                    break;
                case(8):
                    markovText.textContent = 'ТЕКСТ-9?!';
                    break;
                case(9):
                    markovText.textContent = 'ТЕКСТ-10?!';
                    break;
                case(10):
                    markovText.textContent = 'ТЕКСТ-11?!';
                    break;
                    
            }
            markovButtonTwo.textContent = "да пошел ты на хуй!";
        });
    }
    class createCar{
        constructor(src, speed){
            this.src = src;
            this.speed = speed;
        }
        addCar(){
                let smallCar = document.createElement('IMG');
                smallCar.style.cssText = 'width: 100px ; position: absolute ; top: -15% ; transform: translateX(-50%)';
                let position = Math.floor(Math.random() * 10);
                if(position <= 3){
                    smallCar.style.left = '30%';
                }else if(position > 3 && position < 7){
                    smallCar.style.left = '50%';
                }else if(position >=7 && position < 10){
                    smallCar.style.left = '70%';
                }
                const mQuery1100 = window.matchMedia('(max-width: 1100px)');
                if(mQuery1100.matches){
                    console.log(true);
                    smallCar.style.width = '80px';
                    if(position <= 3){
                        smallCar.style.left = '20%';
                    }else if(position > 3 && position < 7){
                        smallCar.style.left = '50%';
                    }else if(position >=7 && position < 10){
                        smallCar.style.left = '80%';
                    }
                }
                const mQuery800 = window.matchMedia('(max-width: 800px)');
                if(mQuery800.matches){
                    console.log('true800');
                    if(position <= 3){
                        smallCar.style.left = '15%';
                    }else if(position > 3 && position < 7){
                        smallCar.style.left = '50%';
                    }else if(position >=7 && position < 10){
                        smallCar.style.left = '85%';
                    }
                }
                const mQuery650 = window.matchMedia('(max-width: 650px)');
                if(mQuery650.matches){
                    console.log(true);
                    smallCar.style.width = '70px';
                    if(position <= 3){
                        smallCar.style.left = '15%';
                    }else if(position > 3 && position < 7){
                        smallCar.style.left = '50%';
                    }else if(position >=7 && position < 10){
                        smallCar.style.left = '85%';
                    }
                }
                const mQuery450= window.matchMedia('(max-width: 450px)');
                if(mQuery450.matches){
                    console.log(true);
                    smallCar.style.width = '60px';
                }
                document.body.style.overflow = 'hidden';
                smallCar.src = this.src;
                content.append(smallCar);
                let num = -10;
                let moveFromTop = setInterval(() => {
                    num += this.speed;
                    smallCar.style.top = num + '%';
                    if(parseInt(smallCar.style.top) >= 100){
                        clearInterval(moveFromTop);
                        smallCar.remove();
                        resultNum += 1;
                        result.innerHTML = 'лучший результат' + ':' + ' ' + resultNum;
                    }
                     if(smallCar.getBoundingClientRect().y + smallCar.clientHeight - 30 >= car.getBoundingClientRect().y 
                         && smallCar.getBoundingClientRect().x + smallCar.clientWidth - 30 >= car.getBoundingClientRect().x 
                         && smallCar.getBoundingClientRect().x + 30 <= car.getBoundingClientRect().x + car.clientWidth){
                             content.remove();
                             modalEnd.classList.add('active');
                             if(!localStorage.getItem('result')){
                                 localStorage.setItem('result', resultNum);
                             }
                             if(localStorage.getItem('result') < resultNum){
                                 localStorage.setItem('result', resultNum);
                             }
                             setTimeout(() => {
                                 modalEnd.classList.remove('active');
                                 window.location.reload();
                             }, 2500);
                 } 
                }, 30);
                 
        }
    }
    let purpleCar = new createCar('img/car-6.png', 1.5);
    let blueCar = new createCar('img/car_blue.png', 1.5);
    let carSport = new createCar('img/car_sport.png', 2.5);

    //AUDIO
    audio.play();
    playAudio.addEventListener('click', () => {
        audio.play();
    });
    pauseAudio.addEventListener('click', () => {
        audio.pause();
    });
    function touchMove(){
        let touchStart,
            touchEnd;
            document.addEventListener('touchstart', (e) => {
            touchStart = e.changedTouches[0].clientX;
    });
document.addEventListener('touchend', (e) => {
    touchEnd = e.changedTouches[0].clientX;
    let mooveLeft = Math.abs(touchStart - touchEnd);
        console.log(mooveLeft );
    if(mooveLeft > 20){
        if(touchStart > touchEnd && car.classList.contains('right')){
            car.classList.remove('right');
            car.style.transform = "rotate(-10deg) translateX(-50%)";
            setTimeout(carFront, 150);
        } else if(touchStart > touchEnd){
            car.classList.add('left');
            car.style.transform = "rotate(-10deg) translateX(-50%)";
            setTimeout(carFront, 150);
        }else if(touchStart < touchEnd && car.classList.contains('left')){
            car.classList.remove('left');
            car.style.transform = "rotate(10deg) translateX(-50%)";
            setTimeout(carFront, 150);
        }else if(touchStart < touchEnd){
            car.classList.add('right');
            car.style.transform = "rotate(10deg) translateX(-50%)";
            setTimeout(carFront, 150);
        }
}
});
}
touchMove();
});
