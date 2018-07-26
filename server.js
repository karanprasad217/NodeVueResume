var http = require("http");
var fs = require("fs");
var path = require("path");

function getmeHome(req, res){
    fs.readFile("./public/index.html", "UTF-8", function(err, html){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(html);
    });
}

http.createServer(function(req,res){
    switch(req.method){
        case "GET": 
        if(req.url === "/"){
            getmeHome(req, res);
        }
        else if(req.url.match("\.css$")){
            var cssPath = path.join(__dirname,'public', req.url);
            var filestream = fs.createReadStream(cssPath,"UTF-8");
            res.writeHead(200,{"Content-Type":"text/css"});
            filestream.pipe(res);
        }
        //else{console.log("Nothing suitable found")};
        //break;
        //case "POST": break;
        //default : break;
    }

//console.log(req.url);
console.log(cssPath);
}).listen(3010);
