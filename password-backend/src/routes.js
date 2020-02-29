const {Router} = require('express')
const PasswordController = require('./controllers/PasswordController')

const routes = Router();

routes.get('/passwords', PasswordController.index)
routes.delete('/passwords/:site',PasswordController.delete)
routes.post('/passwords', PasswordController.store)

module.exports = routes