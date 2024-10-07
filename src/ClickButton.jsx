import { useState } from 'react';
import logo2 from "./img/logo2.png";

function ClickButton() {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [count, setCount] = useState(10);     
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(true);
    const [reset, setReset] = useState(true); 

const handleRelease = () => {
    setIsButtonVisible(true);
    setVisible(false);
};

const handleClick = () => {
    if (count > 0) {
        setCount(count - 1);
    }
    if (count - 1 === 0){
        const randomAmount = Math.floor(Math.random() * 11); 
        setMessage(`PPARABÉNS, VOCÊ GANHOU ${randomAmount} DÓLARES!!!`);
    }
}

const handleReset = () =>{
    setIsButtonVisible(false);
    setVisible(true);
    setCount(count+10)
    setMessage(false)
}


return (
    <div id='pai'>
        {visible && <p>PARA INICIAR É NECESSÁRIO PAGAR 5 DÓLARES. NÃO SE PREOCUPE! AO CONCLUIR O DESAFIO, VOCÊ PODERÁ RECUPERAR O VALOR GASTO OU TALVEZ NÃO!!! <br></br><br></br> </p>}
        {!isButtonVisible && (
            <button onClick={handleRelease}>PAGUE 5 DÓLARES</button>
            
        )}
        {isButtonVisible && (
            <div id='filho'>
            <button onClick={handleClick}>
                
            CLIQUE PARA GANHAR <img src={logo2} alt="Logo do Click Button" title="Logo do Click Button" style={{ verticalAlign: 'middle', marginLeft: '5px', maxHeight: '9.5vh', padding: '1%', marginRight: '5%' }} />
        </button>
        
                <p>FALTAM: {count}</p>
            </div>
        )}
        
        {message && <p><br></br><br></br>{message}<br></br><br></br></p>}
        {message && <button onClick={handleReset}>DESEJA CONTINUAR?</button>}
        
    </div>
    
);
}

export default ClickButton;
