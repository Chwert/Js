var block = document.getElementById('one');
//клік миші перекрасить в зелене
block.onclick = function() {
    this.style.background = 'green';
        this.onclick = null;//відміна кліка миші
}

//подвійний клік миші
block.ondblclick = function() {
    this.style.background = 'red';
}

//клік правою кнопкою миші
block.oncontextmenu = function() {
    this.style.background = 'black';
    return false;//заборонити браузеру виводити
                //контекстне меню
}

//ЗАБОРОНА ВИКЛИКУ КОНТЕКСТНОГО МЕНЮ НА ВСЬОМУ САЙТУ
//document.oncontextmenu = function() {
  //  return false;
//}

//вхід миші на елемент (аналог hover)

/*block.onmouseenter = function() {
    console.log('in!!!');
    this.style.background = 'gold';
}

//вихід миші з елемента
block.onmouseleave = function() {
    this.style.background = 'orange';
}*/

//рух миші всередині блока
/*var a = 0;
block.onmousemove = function() {
    a++;
    this.style.width = 100 + a + 'px';
}*/

//нажимаєм і тримаєм любу кнопку миші
block.onmousedown = function(Event) {//event покаже
                                    //все про функцію
    this.style.background = 'cyan';
    console.log('button:' + Event.button);
    console.log('which:' + Event.which);
}

//відпуск миші всередині блока
block.onmouseup = function() {
    this.style.background = 'pink';
}