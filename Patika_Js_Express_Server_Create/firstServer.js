import express from "express";

const app = express()

app.get('/', function (req, res) {
    res.status(200)
    res.send('Welcome to main page.')
})
app.get('/about', function (req, res) {
    res.status(200)
    res.send('Welcome to about page.')
})

app.get('/contact', function (req, res) {
    res.status(200)
    res.send('Welcome to contact page.')
})
app.get('*', function (req, res) {
    res.status(404)
    res.send('404 Not Found.')
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on ${port} port.`);
})


