const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello thai kitchen chronicles');
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id === id)
    res.send(selectedChef)
})

app.listen(port, ()=> {
    console.log(`thai food recipe server is running on port ${port}`)
})