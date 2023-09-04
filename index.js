const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact-me', (req, res) => {
    res.render('contact-me')
})

app.all('*', (req, res) => {
    res.render('404')
})




app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})