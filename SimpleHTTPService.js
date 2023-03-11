var http = require("http");
const assert = require("assert");



var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
response.write("<script>")
response.write("document.body.style.background = \"#\" +   Math.floor(Math.random()*16777215).toString(16);   ");
response.write("</script>");
  response.write("</body>");
  response.write("</html>");

  afewtests();

  response.end();
});

function afewtests(){
    console.log("Asif  there you are in the test function ");
}

server.listen(9091);
console.log("Server is listening on 9091");
