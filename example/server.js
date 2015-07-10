//Lets require/import the HTTP module
var http = require('http');

var url = require('url');

var exec = require('child_process').exec;

//Lets define a port we want to listen to
var PORT=8569;

//We need a function which handles requests and send response
function handleRequest(request, response){
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var count = query && query.count;

  var cmd = 'ruby ' + __dirname + '/../index.rb';

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  exec(cmd, function(error, stdout, stderr) {
    if (stderr) {
      return response.end(stderr);
    }
    response.end(stdout);
  });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
