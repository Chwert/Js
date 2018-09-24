document.onwheel = function(event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById('line').innerHTML = 'Вниз';
    }
    else {
        document.getElementById('line').innerHTML = 'Вверх';
    }
    var speed = event.deltaY;
    
    speed = Math.abs(speed);
    
    if (speed < 100) {
      document.getElementById('speed').innerHTML = 'Низька';  
    }
    else if (speed < 150) {
        document.getElementById('speed').innerHTML = 'Середня';
    }
    else if (speed < 250) {
        document.getElementById('speed').innerHTML = 'Висока';
    }
    else {
        document.getElementById('speed').innerHTML = 'Дуже висока';
    }
}

var left = 290;
document.getElementById('test').onwheel = function(event) {
	var line = event.deltaY;
	left =+ line;
	document.getElementById('test2').style.left = left + 'px';
	return false;
}