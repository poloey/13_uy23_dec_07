var friends = ['arif', 'nur', 'arafat', 'munni', 'manjur', 'mehedi', 'faria'];
var html = '<ul>';
for (var i = 0; i < friends.length; i++) {
  html = html + '<li>' + friends[i] + '</li>'
}
html = html + '</ul>';
var fruit = document.getElementById('fruit');
fruit.innerHTML = html;

var colors = ['red', 'green', 'blue', 'orange', 'salmon', 'tomato']

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}
function colorChange () {
  fruit.style.color = colors[getRandomInt(0, colors.length -1)];
  fruit.style.fontFamily = 'sans-serif';
  fruit.style.fontSize = '20px';
}

