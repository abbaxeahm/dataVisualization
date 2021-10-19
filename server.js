
const express = require('express')
const port = 5001

var app = express() // inizialise express
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => console.log('Listening on port ' + port))