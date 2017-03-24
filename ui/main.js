console.log('Loaded!');

//change the main text
var element = document.getElementById('main-text');
element.innerHTML='new value';

//move image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginleft = '100px';
};