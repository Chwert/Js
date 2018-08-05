var m = [];
var m1 = [9, 33, 'Hello'];
m1[3] = 444;//можна додавати елементи масиву після його об'явлення
m1[4] = 444444;
console.log(m1[3]);
//console.log(m1.length);

//for (var i = 0; i<m1.length; i++) {
    //document.getElementById('out').innerHTML += m1[i] + '<br>';
    
//}

function masOut() {
    var p = document.getElementById('out');
    var str = '';//допоміжна змінна
    
    for (var i = 0; i<m1.length; i++) {
        str += i + '---' + m1[i] + '<br>';//буде швидше працювати
    }
    
    p.innerHTML = str;//вивод масива
}

masOut();//запуститься при старті загрузки сторінки

function p1() {
    var i1 = document.getElementById('i1').value;
    m1.push(i1);//добавляєм в кінець масиву нове значення
    masOut();//і виводить його
    
}

function p2() {
     m1.pop();//удаляє останній елемент масиву
    masOut();//вивід масиву після удалення останнього елементу
}
   