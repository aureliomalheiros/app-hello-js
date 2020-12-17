var http = require('http');

function handle(request, response) {
    response.end('Hello World');
}

var server = http.createServer(handle);
server.listen(8080, function(){
    console.log('Servidor funcionando com sucesso!')
});