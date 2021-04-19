//Access node HTTP module using its built in require function.
 const http = require("http");

//Mention port we running our server on.
const port = 3000;

//Mention host to serve it locally.
const host = "127.0.0.1";

//Utilize the createServer function of the http module to create the server. Pass a callBack function agreement.
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});   //An inbuilt method which sends status code and MIME type.
    response.write("Hi, I'm Mike, an aspiring web dev: self-learning.");
    response.end();
});

//Method used to bind port to any incoming connection.
server.listen(port, host, (error) => {
    if (error) {
        return console.log("Error occured: ", error);
    }

    console.log(`Server running on port ${host}:${port}`);
})