const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000

const routes = require('./routes');

const errorHandler = require('./handlers/error')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// GET requests = search for matches with url in '/api/:url params.url
//if match, sends back redirect link - if not, returns text to send POST request to create

//POST requests = search DB for matches with url /api/:url
// if match -> return redirect link
// if not, create redirect link then send it to user

app.use(express.static('public'))

app.use('/', routes);

app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err)
  });

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`${PORT}`)
}); 