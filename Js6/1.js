function out() {
    var p;
    p = document.getElementById('out');
   // p.innerHTML = 'Hello';//в параграф замість Тестовий текст виведе 'Hello'
    
    //p.innerHTML += ' <b>Hello</b>';//в параграф до Тестовий текст допише 'Hello' жирним
    
    //p.innerText += ' <b>Hello</b>';//виводить теги як текст і працює в ІЕ на відміну від innerHTML
    
   //p.insertAdjacentHTML('beforeBegin', 'Hi');
    //beforeBegin - перед відкриваючим тегом
    
   //p.insertAdjacentHTML('afterBegin', 'Hi');
    //afterBegin - після відкриваючого тега
    
    //p.insertAdjacentHTML('beforeEnd', 'Hi');
    //beforeEnd - перед закриваючим тегом

    //p.insertAdjacentHTML('afterEnd', 'Hi');
    //afterEnd - після закриваючого тега

    p.outerHTML = '<div class="one">Hello</div>';
    //заміняє параграф р на div class="one" з написом Hello, який потім можна оформляти в css
}   