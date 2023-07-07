import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CharacterClient from './components/character/character-client';
import './bootstrap.css'
import MyRouter from './components/character/MyRouter';
import HomeComponent from './components/character/HomeComponent';
import DropdownHousesComponent from './components/character/DropdownHousesComponent';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyRouter />
      </div>
    )
  }
}

export default App;
