require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , cors = require('cors')
    , axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

app.get('/api/get-all-books', (req,res) => {
    const db = app.get('db');
    db.select_books([]).then(resp => {
        res.status(200).send(resp)
    })
})
app.get('/api/getBook/:id', (req,res) => {
    const db = app.get('db');
    const id = req.params.id
    db.featured_book([id]).then(resp => {
        res.status(200).send(resp)
    })
})

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`I'm listening on port: ${SERVER_PORT}`)
});