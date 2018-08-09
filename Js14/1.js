var p = document.getElementsByTagName('p');//отримуємо всі параграфи
var one = document.getElementsByClassName('one');//отримуємо параграфи з класом one

console.log(p);
//p.onclick = f1; !помилка!

for (var i = 0; i<p.length; i++) {//для p
    p[i].onclick = f1;//правильно, тому що р - масив даних
}

for (var i = 0; i<one.length; i++) {//для p .one
    one[i].onclick = f2;
}

function f1() {
    //alert('Hello');
    console.log(this);//показує до якого параграфу звертаємось
    this.style.background = 'pink';
}

function f2() {
    //alert('Hello');
    console.log(this);//показує до якого параграфу звертаємось
    this.style.fontWeight = 'bold';
}