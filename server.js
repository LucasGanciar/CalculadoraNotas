const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/AverageCalculator'));

app.get('/', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/AverageCalculator/index.html'));
});

app.listen(process.env.PORT || 8080);