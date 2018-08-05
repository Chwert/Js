//цикл з передумовою
function num100() {
    var p, p1;
    p = document.getElementById('out');
    p1 = document.getElementById('out1');
    var i = 0;//початкові умови
    
    while(i<50) {
        p.innerHTML += i+' ';
        i++;
    }

//цикл з післяумовою (умова перевіряється в кінці, тобто цикл виконується хоча б 1 раз)
    
    var j = 100;
    do {
        p1.innerHTML += j + ' ';
        //j++;
        j--;
    }
    while(j>0);

}




