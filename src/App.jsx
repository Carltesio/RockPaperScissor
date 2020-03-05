import React, { Component } from 'react';
import './App.css';
import winner from './winner';
import { Container, Row, Col, ButtonGroup } from 'reactstrap';


class App extends Component {

 

  constructor(props) {
    super(props)
    this.symbols = ["rock", "paper", "scissor"]
    this.state = {
      userChoice: ''
    }
  }

startGame = async (e) => {

  const index = Math.floor(Math.random()*3)
  console.log(this.symbols[index])
  const result = await winner(e.target.name, this.symbols[index])
  this.setState({result: result})
 
}

  render () {
    let result
  
  
    
    if (this.state.result) {
      result = <p>{this.state.result}</p>
    }

    return (
    <div className="App">


      <header className="App-header">
        <h1>Let's  play RPS</h1>
        </header>
       <button name="rock"onClick={this.startGame}> ROCK </button>

    <Row> 
    <ButtonGroup>
    <Col xs="6"><button name="rock"onClick={this.startGame}> ROCK </button></Col>
    <Col xs="6"><button name="paper"onClick={this.startGame}> PAPER </button></Col>
    <Col xs="6"><button name="scissor"onClick={this.startGame}> SCISSOR </button></Col>
    </ButtonGroup>
    </Row>
       <div> {result}  </div>
       <div> </div>
    </div>
    )}
}

export default App;
