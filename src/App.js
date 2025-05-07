import { useState, useRef } from "react";
import { encrypt } from "./encrypt";

function App() {

  const msgRef = useRef();
  const [cryptoKey, setCryptoKey] = useState(3);
  const [msg, setMsg] = useState('');

  function handleIncrementCriptoKey() {
    setCryptoKey((prevValue) => prevValue + 1);
    handleWriteMessage();
  }

  function handleDecrementCriptoKey() {
    if (cryptoKey > 0)
      setCryptoKey((prevValue) => prevValue - 1);
    handleWriteMessage();
  }

  function handleWriteMessage() {
    const msg = encrypt(msgRef.current.value, cryptoKey);
    setMsg(msg);
  }

  return <>
    <h1>Cifra de César</h1>
    <p>Criptografie a sua Mensagem... Ou o seu Poema de Amor!</p>
    <div>
      <textarea
      ref={msgRef} style={{ minWidth: "720px"}} 
         placeholder='Entre com sua mensagem para ser criptografada...' onChange={handleWriteMessage}/>  
      <div>
        <p>CHAVE DE CRIPTOGRAFIA UTILIZADA ATUALMENTE: <b style={{fontSize: "21px"}}>{cryptoKey}</b></p>
        <button onClick={handleIncrementCriptoKey}>Aumentar Chave de Criptografia</button>
        <button onClick={handleDecrementCriptoKey}>Diminuir Chave de Criptografia</button>  
        </div>
    </div>
    <div style={{minWidth: "180px", minHeight: "127px", backgroundColor: "#f1f1f1", padding: "2px", marginTop: "12px" }}>
      <p style={{backgroundColor: "fff"}}>{msg}</p>
    </div>
    
  </>
}

export default App;
