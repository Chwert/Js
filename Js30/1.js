var number =  Math.floor(10 * Math.random()) + 1;//ot 1 do 10
console.log(number);
var count = 3;

var check = document.getElementById('check');
check.onclick = function() {
	if (count > 0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');

		if (usernum == number) {
			out.innerHTML = 'Ура, Ви вгадали!!!';
		}
		else if (usernum > number) {
			out.innerHTML = 'Перебор';
		}
		else if (usernum < number) {
			out.innerHTML = 'Малувато';
		}
		document.getElementById('count').innerHTML = 'Залишилось спроб:' + count;
		count -= 1;
		
	}
	else {
			alert('Ви програли. Сторінка буде перезавантажена');
			location.reload();//перезагрузка сторінки
		}
}