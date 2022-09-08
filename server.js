var http = require('http');
var a = 10;
var b = 20;
var c = a + b;
var mesg = "sum is " + c;
if (c==30){
    mesg += "<br/> c is 30";

}else{
    mesg += "c is not 30";
}

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("welcome to </br> node js");
}).listen(7000);

console.log("server is listening on http://127.0.0.1:7000");