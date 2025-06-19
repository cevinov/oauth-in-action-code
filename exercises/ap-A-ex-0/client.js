var express = require("express");
var cons = require('consolidate'); // Package for template engine to work with express js
var app = express();

// Use the Underscore.js templating engine to render files with the `.html` extension.
app.engine('html', cons.underscore); // Registers the given template engine callback as ext.

// Use the HTML template engine
app.set('view engine', 'html');
app.set('views', 'files/client');

var access_token = null;
var refresh_token = null;
var scope = null;

// Only handles GET requests
app.get('/', function (req, res) {
    // Render index.html with several values that we pass
	res.render('index', {access_token: access_token, refresh_token: refresh_token, scope: scope});
});

// Where use handles all HTTP methods, in this case it's used to serve static files in /
app.use('/', express.static('files/client'));

// Listen all interfaces 0.0.0.0
var server = app.listen(9000, '0.0.0.0', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('OAuth Client is listening at http://%s:%s', host, port);
});
 
