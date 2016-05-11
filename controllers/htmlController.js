
var express = require('express');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/person/:id', function(req, res) {
        res.render('person', {
            ID: req.params.id,
            Qstr: req.query.qstr
        });
    });
};
