import React from 'react';
import './animal.css';
import imagemAnimal from '../../../images/fotoPet.png';
import { Link } from 'react-router-dom';

function Animais(props){
    return(
        <div className='corpo'>
            {console.log(props)}
            <Link className='link-animais' to={'/pet'+ props.index}>
                <div className='imagem'>
                    <img src={imagemAnimal} alt={'foto do pet'}/>
                </div>
                <div className='conteudo-animal'>
                    <h1>
                        {props.nome? props.nome : 'Nome do animal' }
                    </h1>
                    <p>
                        <strong>Tipo:</strong> {props.tipo? props.tipo : 'tipo do animal'}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default Animais;