import React, {useState} from 'react';
import '../../Login/login.css';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Formulario2 = (props)=> {
    const [historico, setHistorico] = useState('');
    
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
    hiddenFileInput.current.click();
    };

    let history = useHistory();

    function clickCadastro(e){
        history.push('/lista');
    }

    function voltar(e){
        props.mudaForms(false);
    }
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        document.getElementById('mudaFoto').style.backgroundImage = fileUploaded;
      };
    return(
        <div className="login-formulario">
            <h1>Cadastro do pet</h1>
            <h2>Informações do pet</h2>
            <br/>
            <textarea value={historico} onChange={e => setHistorico(e.target.value)} placeholder="Histórico"></textarea>
            <Button id='mudaFoto' onClick={handleClick}> Insira uma foto</Button>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} accept="image/png, image/jpeg" style={{display:'none'}} />
            <br/>
            <div className="buttons">
                <Button onClick={clickCadastro} variant="contained" color="secondary">Continuar</Button>
                <Link className="link" onClick={voltar} to='/cadastraPet'>Voltar</Link>
            </div>
        </div>
    );
}

export default Formulario2;