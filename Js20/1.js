one();//визов функціїї
     //функцію можна викликати будь-яку кількість разів
function one() {
    alert('Hello');
    //return 9;//вертає значення функції, тепер її можна
             //використовувати в виразах
    //return закінчує функцію, тому код після нього
    //буде проігноровано
}

//console.log(5 + one());

function summa(a,b) {//функція з параметрами
    a = a || 10;//якщо користувач не ввів параметри то
    b = b || 20;//будуть ці за замовчуванням
    //return(a + b);
    alert(a+b);
}

//console.log( summa(3,8) );

//визов функції з параметрами через анонімну функцію
document.getElementById('b1').onclick = function() {
    summa (12,6);
} 

//ще один приклад опису функції через var
var d = function() {
    alert('wert');
}
d();