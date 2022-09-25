const express = require('express');
const app = express();
const path = require('path');

const PORT = 3030;

app.listen(process.env.PORT || PORT, () => {
    console.log(`El servidor con locacion en ${__dirname} esta corriendo en el puerto ${PORT} satisfactoriamente`)
})
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/singin', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})