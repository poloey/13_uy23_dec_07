---
repo: 13_uy23_dec_07
number: 13 
---
### js dependancy
if one file depend on other file, that other file should include first in html document


### dynamically make a list in js

~~~js
var friends = ['arif', 'nur', 'arafat', 'munni', 'manjur', 'mehedi', 'faria'];

var html = '<ul>';
for (var i = 0; i < friends.length; i++) {
  html = html + '<li>' + friends[i] + '</li>'
}

html = html + '</ul>';
document.getElementById('fruit').innerHTML = html;
~~~


### Select element using css selector using `querySelector` and `querySelector` function

~~~js
//return string
document.querySelector('css_selector');

//return array
document.querySelectorAll('css_selector')
~~~


### js event listener

~~~js
element.addEventListener('event_name', fn);
~~~

### color change from js
~~~js
var button =  document.querySelector('button');
button.addEventListener('click', colorChange);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}
function colorChange () {
  fruit.style.color = colors[getRandomInt(0, colors.length -1)];
  fruit.style.fontFamily = 'sans-serif';
  fruit.style.fontSize = '20px';
}
~~~

