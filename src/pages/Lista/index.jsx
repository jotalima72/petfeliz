import React from 'react';
import './Lista.css';
import imagem from '../../images/logoPequena.png';
import Button from '@material-ui/core/Button';

function lista(){
    return (
        <div className='caixa-lista'>
            <div className='cabecalho'>
            <img src={imagem} alt="PetFeliz"/>
                <div className='botoes'>
                    <Button variant="contained" color="primary">cadastrar pet</Button>
                    <Button variant="contained" color="secondary">sair</Button>
                </div>
            </div>
            
            <div className='conteudo'>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repudiandae. In pariatur quisquam iure adipisci, ut numquam dolorum quibusdam sit eveniet fugit ratione velit commodi quidem et, dolore, optio ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae debitis pariatur, totam minus unde nesciunt architecto blanditiis voluptates, corrupti, omnis officiis quia exercitationem aut fuga fugit. Quam, fuga quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste temporibus esse iusto ipsam error magni ut dolorem suscipit impedit accusantium quibusdam a libero veritatis, adipisci rerum deserunt, iure nostrum quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consectetur porro esse consequatur id officiis reprehenderit odio? Aperiam, vero tempore! Quo quasi neque rerum ad optio voluptatum error odio minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, tempore quas, doloremque, molestiae quidem cumque sint temporibus laborum aliquam animi sunt sapiente! Quibusdam non vero sed accusantium ea. Tempore, et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, veniam quia amet asperiores, vel quidem corporis nulla quibusdam quos sint vero quasi natus ad pariatur illo facilis perferendis itaque commodi?
                </p>
            </div>
        </div>
    );
}

export default lista;