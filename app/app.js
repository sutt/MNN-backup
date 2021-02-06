const express = require('express')
const handlebars = require('hbs')
const apiKey = require('./.env.json')

const app = express()
app.set('views', './app/views/')
app.set('view engine', 'hbs')

const key = process.env.MAPS_KEY || apiKey[0]['key']

app.get('/', (req, res) => {
    res.render('index',{key: key} )
})

const port = process.env.PORT || 3000
app.listen(port,() => {console.log(`running on port: ${port}` )} )