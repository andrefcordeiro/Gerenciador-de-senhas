import React, {useState} from 'react';
import './NewPassword.css';
import 'C:/Programacao/Java Script/ProjetosReactJS/password/src/global.css'
import api from 'C:/Programacao/Java Script/ProjetosReactJS/password/src/services/api'
import {Link, withRouter} from 'react-router-dom';

function NewPassword(){

    const [site,setSite] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    async function handleAddPassword(e){
        if(site && email && password){ //não adiciona caso um campo esteja vazio
            const response = await api.post('/passwords', {
                site,
                email,
                password,
            })
        }
        else{
            e.preventDefault()
            alert('Fill all fields' )
        }
        
    }

    return(
        <body id="new_pass">
           
           <Link id="buttonGoTo" to="/Passwords" >GO TO PASSWORDS LIST</Link> 

            <header id="h">ADD PASSWORD</header>

            <div id="main">
                <input 
                    id="input" 
                    placeholder="site"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}>
                </input>

                <div id="email_password">
                    <input 
                        id="input_data" 
                        placeholder="e-mail"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        type="password"
                        id="input_data" 
                        placeholder="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
            </div>

            <Link id="buttonNewPasswords" to="/Passwords" onClick={ (e) => handleAddPassword(e)} >Save</Link> 
        </body>
        
    )
}

export default withRouter(NewPassword)