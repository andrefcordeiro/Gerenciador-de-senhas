import React,{useState}  from 'react';
import './Home.css';
import 'C:/Programacao/Java Script/ProjetosReactJS/password/src/global.css'
import {Link, withRouter} from 'react-router-dom'


function Home() {

    const [Password, setPassword] = useState('')

    function onChange(e){   
        setPassword(e)
    
    }
    function onKeyDown(event){
        if(event.keyCode == 13)
        {
            
        }
    }
    function handleRedirect(e){
        if(Password !== 'a')
        {
            e.preventDefault()
            alert('Wrong password')
        
        }    
    }
      
        return(
        
            <body id="app">
                <div id="container">
                    <text id="header"> PASSWORD KEEPER </text>
                    <text id="text"> INSERT THE MAIN PASSWORD </text>
                    <input 
                        type = "password" 
                        id = "password" 
                        value={Password} 
                        onChange = {e => onChange(e.target.value)}
                        onKeyDown = {event => onKeyDown(event)}
                    />
                    <Link id = "buttonHome" onClick = {(e) => handleRedirect(e)} to="/Passwords"  > SUBMIT</Link>
                 
                </div>
            </body>
        )   
    
   
  
}


export default withRouter(Home)