import './App.css';

function Suma(evento) {
  evento.preventDefault();
  const valor1 = parseInt(evento.target.valor1.value, 10);
  const valor2 = parseInt(evento.target.valor2.value, 10);
  const suma = valor1 + valor2;

  alert('La suma de ' + valor1 + '+' + valor2 + ' es ' + suma);
}

function App() {
  return (
    <div>
      <form onSubmit={Suma}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

export default App;
