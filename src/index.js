var http = require("http");

const httpServer = http.createServer(handleServer);

let jsonFile = JSON.stringify({
    "phone": "18602100000",
    "email": "guestcaredominos@jublfood.com"
});

function handleServer(req, res) {
    if (req.url === "/welcome") {
        res.statusCode - 200;
        res.write("Welcome to Dominos!");
        res.end();
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.write(jsonFile);
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
}

httpServer.listen(8081);

module.exports = httpServer;