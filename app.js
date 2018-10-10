const url = require("url");
const http = require("http");
const fs = require("fs");

let view = fs.readFileSync('./view/index.html');

const app = http.createServer( (request, response) => {

    let query = url.parse(request.url, true);

    response.writeHead(200, {"Content-Type": "text/html"} );
    response.write( view );
    response.end();
});

app.listen(4000);