




const http = require("http")

http.createServer((request,response)=>
{ 
    //window.alert("serverREquested")
    console.log("Server created at 5000")
    response.write("Hello ")
    response.end()
})
.listen(5000);
