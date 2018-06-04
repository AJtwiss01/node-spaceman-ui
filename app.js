const express = require('express')
const app = express();

app.set('view engine', 'pug')

app.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js/superagent', express.static(__dirname + '/node_modules/superagent')); // redirect CSS bootstrap
app.use('/static/assets', express.static(__dirname + '/assets')) // get images


app.get('/spaceman', (req, res) => {
    res.render( 'index', {} )
});

app.listen(8080, () => console.log( "Spaceman UI listening on port 8080!"))