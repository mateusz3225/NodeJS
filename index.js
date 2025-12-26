const express = require('express')
const app = express()
const PORT = 8080
const path = require('path')
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'), 
    (err) => {if(err) {console.log(error); res.status(500).send('errorloiading page')}}
)})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'about.html'),
    (err) => {if(err) {console.log(error); res.status(500).send('errorloiading page')}}
)
})

app.get('/contact-me', (req,res) => {
    res.sendFile(path.join(__dirname, 'contact_me.html'),
    (err) => {if(err) {console.log(error); res.status(500).send('errorloiading page')}}
)
})

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(PORT, ()=> {
    console.log('server is good!')
})