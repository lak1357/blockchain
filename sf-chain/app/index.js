const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const P2pServer = require('./p2p-server');


const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.get('/blocks/:id', (req, res) => {
    res.json(bc.chain[req.params.id]);
});

app.post('/mine', (req, res) => {
    const data = req.body.data;
    bc.addBlock(data);
    const result = { result: "Block added to the chain successfully" };
    res.json(result);
});

app.listen(HTTP_PORT, () => console.log(`Running on port ${HTTP_PORT}`));
p2pServer.listen();