var express = require('express');
var app = express();
app.use(express.static('myapp'))
app.listen(3001);
console.log('Listening on http://localhost:3001');