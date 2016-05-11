/*var moment = require('moment');
console.log(moment().format("ddd, hA"));

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
        else if (req.url === '/api') {
    }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');
*/

var express = require('express');
var app = express();

var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'nodejs'
    });

    con.query('SELECT People.id, firstname, lastname, adress from people inner join personadresses on people.id = personadresses.personid inner join adresses on personadresses.adressid = adresses.id',
        function(err, rows) {
            if (err) throw err;
            console.log(rows[1].firstname);
        }
    );

    next();
});

apiController(app);
htmlController(app);

app.listen(port);
