var sdvig = 0;
var timer;

var test = document.getElementById('test');

//setInterval (function_name, time)

//move();
function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig += 10;
    timer = setTimeout(move, 50);
    
}

//var timer = setInterval(move, 50);//1s = 1000ms
//Ostanovka taymera
document.getElementById('stop').onclick = function() {
    clearTimeout(timer);
}

//setTimeout(move, 5000);//одноразове виконання функції через вибраний проміжок часу

var a = 10;

obr();
function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a == 0) {
        clearTimeout(timer);
        alert('Таймер виключений');
    }
    else {
        timer = setTimeout(obr, 1000);
    }

}
