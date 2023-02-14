const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
    res.status(200).send('healthy');
});

app.get('/', (req, res) => {
    res.sendFile(_dirname + 'index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});