import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      username: "Akim"
  }

  onChangeHandler = (event) => {
    this.setState({
        username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor : '#E1F5FE',
      padding: '25px',
      margin: '5px',
    }

    return (
      <div className="App" style={style}>
        <UserInput data={this.state.username} onChange={this.onChangeHandler} />
        <UserOutput text="Text 1" username={this.state.username} />
        <UserOutput text="Text 2" username="Ulf" />
      </div>
    );
  }
}

export default App;
