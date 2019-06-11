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
    ${ipsum.generate(25)}
    ${ipsum.generate(50)}
    ${ipsum.generate(75)}
    ${ipsum.generate(100)}
    ${ipsum.generate(200)}
    ${ipsum.generate(300)}
  `)
}

function setText(paragraphs) {
  article.innerHTML = '';

  paragraphs.trim().split('\n').forEach(function(p) {
    article.innerHTML += '<p>' + p + '</p>';
  });
}
