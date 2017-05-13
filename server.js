var express = require("express");
var app = express();

var port = process.env.PORT || 3000

app.get('/', function(req, res){
	var ip = req.ip;
	var language = req.acceptsLanguages();
	var software = req.headers['user-agent']
	res.send(JSON.stringify({ip: ip, language: language, software: software}));
});

app.listen(port, function(){
    console.log("sever started on port " + port);
})