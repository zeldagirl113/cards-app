import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import { Component } from 'react';
import GameList from './GameList';
import First from './Pages/First';

export default class App extends Component {
render() {
  return (
    <div className="App">

  <table className="Main-Layout">
  <tr className="App-header">
    <td className="Main-Title">
        <h1>
          Pixel Cards
        </h1>
    </td>
    <td className="Header2">
      <h1 className="Game-Title">Games Title</h1>
    </td>
  </tr>
  <tr className='MainBody'>
    <td className="Temp">Unknown</td>
    <td className="Game-List">
      <GameList/>
    </td>
  </tr>
</table>
</div>
    );
  }
}
