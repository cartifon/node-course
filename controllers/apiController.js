module.exports = function(app) {
    app.get('/api/person/:id', function(req, res) {
        // get that data from database
    });

    // app.get('/api', function(req, res) {
    //     res.json({
    //         firstname: 'John',
    //         lastname: 'Doe'
    //     });
    // });
    //
    // app.post('/person', urlencodedParser, function(req, res) {
    //     res.send('Thank you');
    //     console.log(req.body.firstname, req.body.lastname);
    // });
    //
    // app.post('/personjson', jsonParser, function(req, res) {
    //     res.send('Thank you for the JSON data');
    //     console.log(req.body.firstname, req.body.lastname);
    // });


    app.post('/api/pperson', function(req, res) {
        // save to the databade
    });

    app.delete('/api/person/:id', function(req, res) {
        // delete from the database
    });
};
