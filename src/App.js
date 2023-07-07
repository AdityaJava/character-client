import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CharacterClient from './components/character/character-client';
import './bootstrap.css'


class App extends Component{
  render(){
    return(
      <div className='App'>
        <CharacterClient/>

      </div>
    )
  }
}

export default App;
