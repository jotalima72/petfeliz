import React, {useState} from 'react';
import Caixa from '../../components/Caixa/caixa';
import imagem from '../../images/petCadastro.png';
import Form1 from './components/form1'
import Form2 from './components/form2'

function CadastroPet()
{
    const [cadastroIniciado, setCadastroIniciado] = useState(false);

    function mudaForms(cadastroIniciado){
        setCadastroIniciado(cadastroIniciado);
        
    }
   

    

    return(
        <Caixa className="caixa">
            <img src={imagem} alt="PetFeliz"/>
            {
                cadastroIniciado ? <Form2 mudaForms={mudaForms}/> : <Form1 mudaForms={mudaForms}/>
            }
        </Caixa>
    );

}

export default CadastroPet;