import React from 'react';
import './Lista.css';
import imagem from '../../images/logoPequena.png';
import Button from '@material-ui/core/Button';
import Animal from './components/animais';
import dataDAO from './components/DAO.json';
import {useHistory} from 'react-router-dom';

const data = dataDAO;

function Lista(){

    const history = useHistory();

    function cadastrarPet(){
        history.push('/cadastraPet');
    }
    function sair(){
        history.push('/');
    }
    return (
        <div className='caixa-lista'>
            <div className='cabecalho'>
                <div className='cabecalhoImagem'>
                    <img src={imagem} alt="PetFeliz"/> 
                </div>
                <div className='botoes'>
                    <Button onClick={cadastrarPet} variant="contained" color="primary">cadastrar pet</Button>
                    <Button onClick={sair} variant="contained" color="secondary">sair</Button>
                </div>
            </div>
            <br/>
            <br/>
            <input placeholder='Pesquise um pet para adotar'/>
            
            <div className='conteudo'>
                {data.map((valor, index) => 
                    <Animal nome={valor.nome} tipo={valor.tipoAnimal} index={index}/>
                    )}
               
            </div>
        </div>
    );
}

export default Lista;
