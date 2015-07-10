(function() {
  var article = document.getElementById('article');
  var generate = document.getElementById('generate');
  var count = document.getElementById('count');

  getData();

  generate.addEventListener('click', function() {
    getData();
  }, false);

  function getData(n) {
    var url = 'http://localhost:8569/?count=' + (n>>0);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false );
    xhr.send(null);

    setText(xhr.responseText);
  }

  function setText(paragraphs) {
    article.innerHTML = '';

    paragraphs.split('\n').forEach(function(p) {
      article.innerHTML += '<p>' + p + '</p>';
    });
  }

})();
