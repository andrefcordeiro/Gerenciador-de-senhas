const Password = require('../models/Password')

// métodos de um controller : index, show, store, update, destroy

module.exports = {
    //FUNÇÃO PARA LISTAR TODOS AS SENHAS
    async index(request, response){
        const passwords = await Password.find()

        return response.json(passwords)
    },

    //FUNÇÃO PARA DELETAR AS SENHAS
    async delete(request, response){
      
        const passwords = await Password.deleteOne(request.params)

        return response.json(passwords)
    },

    //FUNÇÃO PARA ADICIONAR UMA SENHA (CASO SEU SITE AINDA NÃO EXISTA)
    async store (request, response) {  //store é o  nome da função CRIADA POR MIM MSM, uma named function

        const { site, email, password} =  request.body
    
        let pass = await Password.findOne({ site })

        if(!pass){
            console.log (site, email, password)
    
            pass = await Password.create({
                site,   //site: site é a mesma coisa
                email,
                password,
            })
        
        }

        
        return response.json(pass)
    }
}
