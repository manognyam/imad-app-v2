console.log('Loaded!');

//change the main text
var element = document.getElementById('main-text');
element.innerHTML='new value';

//move image
var img = document.getElementById('madi');
var marginLeft = 0;
function moiveRight () {
    marginLeft=marginLeft + 10;
    img.style.marginLeft = marginLeft = 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
};