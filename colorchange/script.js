var button = document.querySelector('button');
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
function colorChange () {
  document.body.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
}
button.addEventListener('mouseout', colorChange)
button.addEventListener('mouseover', colorChange)
