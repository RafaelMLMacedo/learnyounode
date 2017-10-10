const fs = require('fs');
const http = require('http');

const params = process.argv.slice(2);
const port = params[0];
const path = params[1];

// request is used to fetch properties, such as the header and query-string
// from the request.
// response is used for sending data to the client, both headers and body.
const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(path);

    stream.pipe(response)
});

server.listen(port);