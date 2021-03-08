import React from 'react';
import './caixa.css';

function Caixa(props)
{

    return(
        <div className="caixa">
            <div className="esquerda">
                {props.children[0]}
            </div>
            <div className="direita">
                {props.children[1]}
            </div>
            
        </div>
    );

}

export default Caixa;