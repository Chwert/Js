//при русі мишкою вставляєм картинку через джаваскріпт в документ
document.onmousemove = function() {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn3.iconfinder.com/data/icons/scarycons/140/black-cat-48.png" id="cat">');
    
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';
    
    document.onmousemove = function(event) {
        //позиція миші відносно лівого краю вікна
        cat.style.left = event.clientX + 20 + 'px';
         //позиція миші відносно верхнього краю вікна
        cat.style.top = event.clientY + 20 + 'px';
    }
}



/**/