const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (request, response) => {
    html = path.join(__dirname, 'index.html')
    response.sendFile(html)
})

app.listen(port, () => {
    console.log(`Example app on port ${port}`)
})
