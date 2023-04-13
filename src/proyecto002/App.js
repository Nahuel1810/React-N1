import logo from './logo.svg';
import './App.css';

function mostrarTitulo(titulo) {
  return (<h1 style={{ color: "#a83232" }}>
    {titulo}
  </h1>);
}

function mostrarSubtitulo(subtitulo) {
  return (<h3 style={{ color: "#3258a8" }}>
    {subtitulo}
  </h3>);
}



function App() {
  return (
    <div>
      {mostrarTitulo('Hola Mundo')}
      {mostrarSubtitulo('Fin')}
    </div>
  );
}

export default App;
