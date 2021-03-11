import React, {useState} from 'react';
import '../../Login/login.css';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Formulario2 = (props)=> {
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    let history = useHistory();

    function clickCadastro(e){
        console.log(`${telefone} ${email} - ${senha}`);
        history.push('/lista');
    }
    return(
        <div className="login-formulario">
            <h1>Cadastro</h1>
            <h2>Insira suas informações</h2>
            <br/>
            <input value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone"></input>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"></input>
            <input value={senha} onChange={e => setSenha(e.target.value)} type='password' placeholder="senha"></input>
            <br/>
            <div className="buttons">
                <Button onClick={clickCadastro} variant="contained" color="secondary">Continuar</Button>
                <Link className="link" to="/">voltar</Link>
            </div>
        </div>
    );
}

export default Formulario2;