import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Switch, Route, withRouter } from 'react-router-dom'
import Passwords from './pages/login/components/Passwords/Passwords.js';
import Home from './pages/login/components/Home/Home.js'
import NewPassword from './pages/login/components/NewPassword/NewPassword.js'
import history from './pages/login/components/history.js'

ReactDOM.render(
   
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home}></Route>      {/*//path não é o caminho para os components, mas sim o nome da rota que aparecerá no link */} */}
                <Route path="/Passwords" component={Passwords} ></Route>
                <Route path="/NewPassword" component={NewPassword}></Route>
            </Switch>
        </BrowserRouter>
          
    ,document.getElementById('root')


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
