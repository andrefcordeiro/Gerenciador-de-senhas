const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

mongoose.connect(#insira seu banco de dados#, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors()) //libera o acesso interno para todos
app.use(express.json())
app.use(routes)

app.listen(3333)
