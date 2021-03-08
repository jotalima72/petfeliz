import React from 'react';
import '../login.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Formulario = ()=> {
    return(
        <div className="login-formulario">
            <h1>Login</h1>
            <h2>bem vindo!</h2>
            <br/>
            <input placeholder="E-mail"></input>
            <input type="password" placeholder="Senha"></input>
            <br/>
            <div className="buttons">
                <Button variant="contained" color="secondary">Login</Button>
                <Link className="link" to="/Cadastro" >Cadastrar-se</Link>
            </div>
        </div>
    );
}

export default Formulario;