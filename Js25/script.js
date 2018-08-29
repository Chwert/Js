//document.onkeypress = function(event) {
//    console.log(event);//виводить в консоль подію(event) натиснення клавіші
//    if(event.shiftKey) {
//        console.log('Натиснута клавіша \'Shift\'');
//    }
//    
//    //console.log(event.key);//виводить введений символ
//}

//Ввод тільки цифр інакше не цифра
document.getElementById('test').onkeypress = function(Event) {
//    console.log(Event);
    if (Event.charCode<48 || Event.charCode>57) {
        console.log('Не цифра');
        return false;//не вводитиме в input не цифри
    }
}