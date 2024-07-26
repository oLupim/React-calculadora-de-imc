import React, {useState}  from "react";
import './HomeIMC.css';

function HomeIMC(){

    const [inputAltura, setInputAltura] = useState('');
    const [inputPeso, setInputPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const [botaoTexto, setBotaoTexto] = useState('Calcular');
    const [idade, setIdade] = useState('');



    const CalcularClick = (e)=>{
        e.preventDefault();
        if (botaoTexto === 'Calcular') {
            const numAltura = parseFloat(inputAltura)/100;
            const numPeso = parseFloat(inputPeso);

            if (!isNaN(numAltura) && !isNaN(numPeso)) {
                const imc = numPeso/(numAltura * numAltura);
                setResultado(imc.toFixed(2));
                setBotaoTexto('Resetar');
            } else{
                alert('Por favor, insira valores numéricos válidos.');
            }

        } else{
            limparInputs();
            setResultado(null);
            setBotaoTexto('Calcular'); 
        }
    };

    const limparInputs = () => {
        setInputAltura('');
        setInputPeso('');
        setIdade('');
      };



    return(


        <div>

            <h1>Calculadora de IMC</h1>

            <div className="divPai">

                <form className="formIdade">
                    <h2>Idade:</h2>
                    <input 
                        id="adicionar-idade"
                        type="text"
                        placeholder="Ex: 25" 
                        value={idade}
                        onChange={(e)=>{setIdade(e.target.value)}}/>
                    <span>(anos)</span>
                </form>

                <form className="formAltura">
                    <h2>Altura:</h2>
                    <input 
                        id="adicionar-altura"
                        type="text"
                        placeholder="Ex: 180" 
                        value={inputAltura}
                        onChange={(e)=>{setInputAltura(e.target.value)}}/>
                    <span>(cm)</span>
                </form>

                <form className="formPeso">
                    <h2>Peso:</h2>
                    <input 
                        id="adicionar-peso"
                        type="text"
                        placeholder="Ex: 75"
                        value={inputPeso}
                        onChange={(e)=>{setInputPeso(e.target.value)}} />
                    <span>(kg)</span>
                </form>
                
                <button className="buttomCalcular" type="submit" onClick={CalcularClick}>{botaoTexto}</button>
                
            </div>

            {resultado !== null && (
                <div>
                    <p className="resultado">Resultado: {resultado}</p>
                </div>
            )}
        </div>
    )


}

export default HomeIMC