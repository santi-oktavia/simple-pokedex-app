import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect, 
  HashRouter, 
  NavLink
} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home.js";
import DetailPokemon from "./Components/DetailPokemon.js";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul>
        </header>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/:pokemonName" component={DetailPokemon} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
