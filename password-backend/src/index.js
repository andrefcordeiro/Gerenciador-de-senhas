const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

mongoose.connect('mongodb+srv://trakinaj:Andre2015@cluster0-8nvii.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors()) //libera o acesso interno para todos
app.use(express.json())
app.use(routes)

app.listen(3333)