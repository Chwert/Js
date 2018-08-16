var goods = {
    "35455" : {
        "name" : "банан",
        "cost" : "30",
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png",
        "sklad" : "yes"
    },
    "12345" : {
        "name" : "помідор",
        "cost" : "20",
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sklad" : "yes"
    },
    "12678" : {
        "name" : "полуниця",
        "cost" : "50",
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
        "sklad" : "no"
    }
};

console.log(goods);

var out = '';
for (var key in goods) {
    out += 'Назва: ' + goods[key].name + '<br>';
    out += 'Ціна: ' + goods[key].cost + '<br>';
    out += 'Наявність на складі: ' + goods[key].sklad + '<br>';
    out += '<img src="' + goods[key].img + '">' + '<br>';
    out += '<hr>';
    document.getElementById('out').innerHTML = out;
}