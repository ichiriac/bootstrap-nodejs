module.exports = function(app) {
    app.get('/hello', (req, res) => {
        res.send('Hello '+req.query.name +'! ')
    });   
    app.get('/login', function(req, res) {
        res.render('login', {
            'site_title': 'Amazing website',
            'form_title': 'Who <strong>are</strong> you ?',
            'items': ["john", "wick"]
        });
    });
    app.post('/login', function(req, res) {
        res.render('login', {
            'site_title': 'Amazing website',
            'form_title': 'Who <strong>are</strong> you ?',
            'result': req.body.username == 'root' && req.body.password == 'god' ? 'pass': 'fail'
        });
    });
}