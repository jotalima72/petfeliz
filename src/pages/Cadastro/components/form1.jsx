import React, {useState} from 'react';
import '../../Login/login.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const Formulario = (props)=> {
    const [nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState(new Date());

    function clickCadastro(e){
        console.log(`${nome} ${Sobrenome} - ${dataNascimento}`);
        props.mudaForms(true);
    }

    return(
        <div className="login-formulario">
            <h1>Cadastro</h1>
            <h2>Insira suas informações</h2>
            <br/>
            <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome"></input>
            <input value={Sobrenome} onChange={e => setSobrenome(e.target.value)} placeholder="Sobrenome"></input>
            <input value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} type='date' placeholder="Data de nascimento"></input>
            <br/>
            <div className="buttons">
                <Button onClick={clickCadastro} variant="contained" color="secondary">Continuar</Button>
                <Link className="link" to="/">voltar</Link>
            </div>
        </div>
    );
}

export default Formulario;