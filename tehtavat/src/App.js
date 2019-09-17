// TÄHÄN TIEDOSTOON SINUN EI TARVITSE TEHDÄ MITÄÄN MUUTOKSIA!

import React, { Component } from 'react';
import './App.css';
import Game from './Game';

/*
  HUOMIO ALLAOLEVAT IMPORTIT, JA TOTEUTA NIIDEN MUKAISET FUNKTIOT speedMath.js -TIEDOSTOON!
*/
import { addSpeed, subtractSpeed } from './speedMath';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: {
        x: 5,
        y: 5,
        z: 5
      },
      inputX: 0,
      inputY: 0,
      inputZ: 0
    }
  }

  increaseSpeed() {
    this.setState({speed: addSpeed(this.state.speed, {x: this.state.inputX, y: this.state.inputY, z: this.state.inputZ})});
  }

  decreaseSpeed() {
    this.setState({speed: subtractSpeed(this.state.speed, {x: this.state.inputX, y: this.state.inputY, z: this.state.inputZ})});
  }

  render() {
    return (
      <div className="page">
        <div>
          <h1>Reactoiva kuutio</h1>
        </div>
        <Game speed={this.state.speed} />
        <div>
          <div><label>X: <input type="number" placeholder="Set X" value={this.state.inputX} onChange={e => this.setState({inputX: Number(e.target.value)})}></input></label></div>
          <div><label>Y: <input type="number" placeholder="Set X" value={this.state.inputY} onChange={e => this.setState({inputY: Number(e.target.value)})}></input></label></div>
          <div><label>Z: <input type="number" placeholder="Set X" value={this.state.inputZ} onChange={e => this.setState({inputZ: Number(e.target.value)})}></input></label></div>
          <button onClick={() => this.increaseSpeed()}>Increase</button>
          <button onClick={() => this.decreaseSpeed()}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default App;