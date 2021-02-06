const express = require('express')
const handlebars = require('hbs')

let apiKey = [{key:'NO_KEY'}]
try {apiKey = require('./.env.json')} catch {}
const key = process.env.MAPS_KEY || apiKey[0]['key']

const app = express()

app.use('/js', express.static('./app/js'));
app.use('/data', express.static('./app/data'));
app.set('views', './app/views/')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index',{key: key} )
})

const port = process.env.PORT || 3000
app.listen(port,() => {console.log(`running on port: ${port}` )} )