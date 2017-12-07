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


### `querySelector` and `querySelector`

~~~js
//return string
document.querySelector('css_selector');

//return array
document.querySelectorAll('css_selector')
~~~

### color change from js
~~~js
var button =  document.querySelector('button');
button.addEventListener('click', colorChange);
~~~
