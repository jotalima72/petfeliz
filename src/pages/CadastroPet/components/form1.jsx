import React, {useState} from 'react';
import '../../Login/login.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const Formulario = (props)=> {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [motivo, setMotivo] = useState('');

    function clickCadastro(e){
        props.mudaForms(true);
    }

    return(
        <div className="login-formulario">
            <h1>Cadastro do pet</h1>
            <h2>Informações do pet</h2>
            <br/>
            <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome"></input>
            <input value={idade} onChange={e => setIdade(e.target.value)} placeholder="Idade"></input>
            <textarea value={motivo} onChange={e => setMotivo(e.target.value)} placeholder="Por que adotar?"></textarea>
            <br/>
            <div className="buttons">
                <Button onClick={clickCadastro} variant="contained" color="secondary">Continuar</Button>
                <Link className="link" to="/lista">voltar</Link>
                <br/>
            </div>
        </div>
    );
}

export default Formulario;