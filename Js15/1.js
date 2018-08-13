var radio = document.getElementsByName('prim');

for (var i = 0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log(this.value);//показує вибраний елемент
}

document.getElementById('one').onclick = checkRadio;

function checkRadio() {
    var m = document.getElementsByName('prim');
    for (var i = 0; i<m.length; i++) {
        if(m[i].checked) {
            alert(m[i].value);
        break;//вихід з циклу
        }
    }
}