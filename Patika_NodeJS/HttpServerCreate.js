import http from "http";
const port = 8000;

const server = http.createServer((req, res) => {
    console.log("Bir istek alındı");
    const url = req.url
    console.log(url);
    if (url == "/About") {
        res.writeHead(200)
        res.write("Welcome to About page")
    } else if (url == "/index") {
        res.writeHead(200)
        res.write("Welcome to Main page")
    }
    else if (url == "/") {
        res.writeHead(200)
        res.write("Welcome to Main page")
    }
    else {
        res.writeHead(404)
        res.write("This page didnt find.")


    }

    res.end();
})

server.listen(port, () => {
    console.log(`Server ${port} üzerinden dinliyor`);

})