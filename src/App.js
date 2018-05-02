import React, { Component } from 'react';
import logo from './planet.png';
import './App.css';
import ListPlanet from './components/ListPlanet.jsx'
import DetailPlanet from './components/DetailPlanet.jsx'
import NotFound from './components/NotFound.jsx'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">StarWars Planets</h1>
        </header>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ ListPlanet } />
          <Route exact path='/:id' component={ DetailPlanet } />
          <Route path='*' component={ NotFound } />
         </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
