//Access node HTTP module using its built in require function.
const http = require("http");

//load html file with node fs module.
const fs = require('fs');

//Mention port server is to run on.
const port = 3000;

//Mention host to serve it locally.
const host = "127.0.0.1";

//Utilize the createServer function of the http module to create the server. Pass a callBack function agreement.
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-head": "text/html"});
    //reading the content file
    fs.readFile('index.html', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		res.end(data);
	});
})

//Method used to bind port to any incoming connection.
server.listen(port, host, (error) => {
    if (error) {
        return console.log("Error occured: ", error);
    }

    console.log(`Server running on port ${host}:${port}`);
})