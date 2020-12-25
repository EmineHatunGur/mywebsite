var http=require("http");
var fs=require('fs');
var server = http.createServer(function(request,response){
if (request.url=='/index.html'){
     fs.readFile('index.html' , function(err,data){
         response.write(data);
         response.end("bitti");  
     });


  
}


    
    
});
server.listen(8000);