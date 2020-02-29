import React, { useState, useEffect } from 'react';
import './Passwords.css';
import 'C:/Programacao/Java Script/ProjetosReactJS/password/src/global.css'
import api from 'C:/Programacao/Java Script/ProjetosReactJS/password/src/services/api'
import {Link, withRouter} from 'react-router-dom';

function Passwords(){

    const [qtd,setQtd] = useState([]) //usar o site como key

    useEffect(() => { 

        async function loadPasswords(){
            const response = await api.get('/passwords') 
              setQtd(response.data)
            
        }  
        loadPasswords()

    }) // adicionar um aray vazio para executar apenas uma vez

    // async function delAllPasswords (){
    //     const response = api.delete('/passwords')
    // }

    async function delOnePassword(site){
        const index = qtd.indexOf()

        const response = api.delete(`/passwords/${site}`)
    }

    const passwords = qtd.map( (item) => (
            <div id="each_password" key = {item.site}>  {/*  separar em apenas 1 componente posteriormente*/}
                <text id="text_each_site">{item.site}</text>
                <div id="data">
                    <text id="text_each_site">{item.email}</text>
                    <text id="text_each_site">{item.password}</text>
                </div>
                <button id="buttonDelete" onClick={() => delOnePassword(item.site) }>DELETE</button>
            </div>
        
        )
    )

    return(
        <body id="pass">
           
            <Link id ="buttonPasswords" to="/NewPassword">ADD PASSWORD</Link>
           
            <header id="head">Passwords</header>
            {passwords}
           
        </body>
        
    )
}

export default withRouter(Passwords)