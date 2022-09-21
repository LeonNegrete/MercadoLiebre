const express = require('express');
const app = express();
const path = require('path');

const PORT1 = 3030;

app.listen(process.env.PORT || PORT1, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT1} satisfactoriamente
    ${__dirname}`)
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