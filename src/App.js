import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Mario";
  const upperName = name.toUpperCase();
  const url = 'https://via.placehold.co/150'

  function sumNumbers(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <h1>Alterando o Jsx</h1>
      <p>Olá, {upperName}</p>
      <p> Soma: {sumNumbers(1,2)}</p>
      <img src={url} alt="uma imagem"></img>
    </div>
  );
}

export default App;
