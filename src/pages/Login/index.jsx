import React from 'react';
import Caixa from '../../components/Caixa/caixa';
import './login.css';
import logo from '../../images/petfeliz1.png';
import Formulario from './components/formulario'

function Login()
{
    return(
        <Caixa className="caixa">
            <img src={logo} alt="Logo"/>
            <Formulario/>
        </Caixa>
    );

}

export default Login;