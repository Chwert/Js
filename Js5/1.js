function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 + num2;
    
    document.getElementById('out').innerHTML = 'Результат: ' + result;
    //в р з ід out виведе результат додавання
}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 - num2;
    
    document.getElementById('out').innerHTML = 'Результат: ' + result;
    //в р з ід out виведе результат віднімання
}

function multiply() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 * num2;
    
    document.getElementById('out').innerHTML = 'Результат: ' + result;
    //в р з ід out виведе результат множення
}

function division() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
    
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    if (num2 == 0) alert('На ноль ділити не можна!');
    
    result = num1 / num2;
    
    document.getElementById('out').innerHTML = 'Результат: ' + result;
    //в р з ід out виведе результат множення
}