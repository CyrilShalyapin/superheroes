const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const api_key = process.env.API_KEY;

const heroes = {};

app.get('/api/heroes/:id', async (req, res) => {
    if (heroes[req.params.id]) {
        res.send(hero);
    } else {
        try {
            const result = await fetch(`https://www.superheroapi.com/api/${api_key}/${req.params.id}`);
            const hero = await result.json();
            heroes[req.params.id] = hero;
            res.send(hero);
        } catch(err) {
            console.log(err);
        }
    }
});

app.use("^/$", (_req, res) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error', err);
        }
        return res.send(data);
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})