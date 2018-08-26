document.getElementById('myslide').onmousemove = function (event) {
    var x = event.offsetX;//координата миші відносно родительського блоку по Х
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
    
}
//при уході миші з блоку здвигає границю в початковий стан
document.getElementById('myslide').onmouseleave = function (event) {
    document.getElementById('two').style.width = '375px';
}