var friends = ['arif', 'nur', 'arafat', 'munni', 'manjur', 'mehedi', 'faria'];

var html = '<ul>';
for (var i = 0; i < friends.length; i++) {
  html = html + '<li>' + friends[i] + '</li>'
}

html = html + '</ul>';
document.getElementById('fruit').innerHTML = html;
document.querySelector('*');  //scalar
document.querySelectorAll('*') //compo