import React from 'react';
import Button from '@material-ui/core/Button'
import imagemAnimal from '../../images/fotoPet.png';
import './pet.css';
import data from '../Lista/components/DAO.json';
import {useParams} from 'react-router-dom';

function Pet(props){
    let { index } = useParams();
    return(
        <div className='corpo-pets'>
            <div className='cabecalho-pet'>
                <div className='imagem-pet-cabecalho'>
                    <img src={imagemAnimal} alt='foto do animal'/>
                </div>
                <div className='cabecalho-nome'>
                    <h1>
                        {data[index].nome? data[index].nome : 'Nome do animal' }
                    </h1>
                    <p>
                        <strong>Raça:</strong> {data[index].raca? data[index].raca : 'raça do animal'} | 
                        <strong> Idade:</strong> {data[index].idade? data[index].idade : 'idade do animal'} | 
                        <strong> Tipo:</strong> {data[index].tipoAnimal? data[index].tipoAnimal : 'tipo do animal'}
                    </p>
                </div>
            </div>
            <div className='button-line'>
                <Button variant="contained" color="primary">cadastrar pet</Button>
                <Button variant="contained" color="secondary">sair</Button>
            </div>
            <div className='conteudo-pet'>
                <h1>Por que adotar?</h1>
                <br/>
                <p>
                    {data[index].motivo}
                </p>
                <br/>
                <h1>Histórico</h1>
                <br/>
                <p>
                    {data[index].historico}
                </p>
                <br/>
                <br/>
                <br/>
            </div>
                

        </div>
    );
}

export default Pet;