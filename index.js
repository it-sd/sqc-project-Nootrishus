const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/health', (req, res) => {
    pool.query('SELECT $1::text as message', ['Hello!'], (error, result) => {
        if (error) {
            res.status(500).send('Error querying database: ' + error);
        } else {
            res.status(200).send('healthy');
        }
    });
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