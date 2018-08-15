var m = {};
var n = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000,
    "double key" : 777
};

n.one = 9000;
console.log(n['prim']);//якщо ключ з пробілом між словами
//або
console.log(n.one);//якщо ключ зодного слова
var ppp = 'hello';
console.log(n[ppp]);
//перебор асоц. масиву

var out = document.getElementById('out');

for (var key in n) {
    //виводим ключ+значення
    out.innerHTML += key + ' ---- ' + n[key] + '<br>';
}