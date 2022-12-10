import './GameList.css';
import { Component } from 'react';

export default class GameList extends Component {
    render(){
        return(
            <table className="Game-List-Table">
                <tr><GameItem value="TEST1"/></tr>
                <tr><GameItem value="TEST2"/></tr>
                <tr><GameItem value="TEST3"/></tr>
            </table>

        )
    }
}

class GameItem extends Component {
    render(){
        return(
            <button className='GameButton'> {this.props.value}  </button>
        )
    }
}