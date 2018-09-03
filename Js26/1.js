var str = '';
document.getElementById('test').onkeypress = function(Event) {
    //console.log(Event);
    
    str += Event.key;
    console.log(str);
    //console.log(String.fromCharCode(97));
    this.value += String.fromCharCode(getRandomIntInclusive(65, 122));//заміняє введений символ на випадковий в інпуті
                                                                    //і додає наступний
    return false;
    //97-122 (lowercase) 65-90 (uppercase)
                    
}


//Отримання випадкового цілого з-поміж двох значень, включно
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}