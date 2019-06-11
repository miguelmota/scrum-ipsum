# scrum-ipsum

> Scrum lorem ipsum generator

## Demo

[https://lab.miguelmota.com/scrum-ipsum](https://lab.miguelmota.com/scrum-ipsum)

<img width="800" alt="screenshot" src="https://user-images.githubusercontent.com/168240/59244244-8b66c900-8bc8-11e9-9243-0f4599c820d5.png">

## Getting started

Using module:

```javascript
const ipsum = require('scrum-ipsum')

const text = ipsum.generate(100)
console.log(text) // planning velocity business it alignment daily scrum mix product burndown chart ...
```

# CLI

```bash
$ scrum --help

  Scrum lorem ipsum generator

  Usage
    $ scrum_ipsum [word_count]
  Examples
    $ scrum_ipsum
    $ scrum_ipsum 200
```

```bash
$ scrum_ipsum 100

backlog needs item this effort to domain or model customer planning ...
```

## License

[MIT](LICENSE)
