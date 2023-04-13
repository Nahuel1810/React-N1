import './App.css';
import { useState } from "react";


function App() {
  function numeroAleatorio() {
    const vector = new Array(5);
    for (let i = 0; i < 5; i++) {
      vector[i] = Math.floor(Math.random() * 100);
    }

    setNumero(vector);
  }

  const [numeros, setNumero] = useState([0, 0, 0, 0, 0]);

  return (
    <div className='Centrado'>
      <button className='Boton' onClick={numeroAleatorio}>Generar numero</button>
      <p>Numeros Aleatorios : </p>
      {numeros.map(num => (<p>{num}</p>))}
    </div>
  );
}

export default App;
