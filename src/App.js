import logo from './logo.svg';
import './App.css';
import Pokemon from './components/PokemonClassComponents/PokemonClassComponents'
import PokemonHooks from './components/PokemonHooks/PokemonHooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Pokemon/>
        <hr/>
        <PokemonHooks/>
      </header>
      
        
    </div>
  );
}

export default App;
