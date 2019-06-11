var ipsum = require('../')

var article = document.getElementById('article');
var generate = document.getElementById('generate');
//var count = document.getElementById('count');

getData();

generate.addEventListener('click', function() {
  getData();
}, false);

function getData() {
  setText(`
    ${ipsum.generate(200)}
    ${ipsum.generate(300)}
    ${ipsum.generate(100)}
  `)
}

function setText(paragraphs) {
  article.innerHTML = '';

  paragraphs.trim().split('\n').forEach(function(p) {
    article.innerHTML += '<p>' + p + '</p>';
  });
}
