//document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();//виклик виконання функції autoSlider, місце виклику не важливе (можна вверху, можна внизу)
var left = 0;
var timer;//для автослайдера

//Зробимо слайдер автоматичним за допомогою settimeout i setinterval

function autoSlider() {
    timer = setTimeout(function() {
        var polosa = document.getElementById('polosa');
        left = left - 128;
        if (left < -512) {
            left = 0;
            clearTimeout(timer);//обнулення таймера
        }
        polosa.style.left = left + 'px';//двигаєм полосу вліво на 128 px
        autoSlider();//виклик виконання функції autoSlider для зациклювання прокрутки слайдера
    }, 1400);//тут 1000 рівна 1 секунді, прокрутить слайдер на 1 картинку за 1 сек.
}

