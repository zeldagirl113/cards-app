import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import { Component } from 'react';

import First from './Pages/First';

export default class App extends Component {
render() {
  return (
    <div className="App">

    <table className="Main-Layout">
  <tr className="App-header">
    <td className="Main-Title">
      <div>
        <h1>
          Pixel Cards
        </h1>
      </div>
    </td>
    <td className="Game-Title">
        Games Title
    </td>
  </tr>
  <tr className='Body'>
    <td className="Unk">UnKnown</td>
    <td className="Game-List">List of Games</td>
  </tr>
</table>
</div>
    );
  }
}
