//Access node HTTP module using its built in require function.
const http = require("http");

//Mention port server is to run on.
const port = 3000;

//Mention host to serve it locally.
const host = "127.0.0.1";


//Utilize the createServer function of the http module to create the server. Pass a callBack function agreement.
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-head": "application/json"});
    //Create a JSON
    let myProfile = {
        firstName: "Adedeji",
        lastName: "Taiwo",
        country: "Nigeria",
        hobby: ["Reading", "Skiing", "Coding"]
    }
    res.write(JSON.stringify(myProfile, undefined, 4));
    res.end();
})

//Method used to bind port to any incoming connection.
server.listen(port, host, (error) => {
    if (error) {
        return console.log("Error occured: ", error);
    }

    console.log(`Server running on port ${host}:${port}`);
})