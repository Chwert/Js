//число буде генеруватись до нажаття кнопки Вгадай
var prNum, tempOut;//глобальні змінні (вони поза фінкції)

//генерація випадкового числа від 1 до 10
prNum = Math.floor((Math.random() * 10) + 1);
//виводим те що видала програма

//не будем виводитьчисло яке видала програма
//для цього закоментуємо tempOut

//tempOut = document.getElementById('temp-out');
//в temp-out присвоюєм значення числа, що загадала програма
//tempOut.innerHTML = prNum;
console.log(prNum);//виводимо в консоль загадане число

function guess() {
    var num, out;//локальні змінні (доступні лише всередині функції)
        
    num = document.getElementById('mynum').value;
    out = document.getElementById('out');
    
    if (num == prNum) {
        out.innerHTML = 'Ви вгадали!';
        
    }
    else if (num > prNum) {
        out.innerHTML = 'Ваше число більше за задане';
    }
    else {
        out.innerHTML = 'Ваше число менше за задане';
    }
    
}