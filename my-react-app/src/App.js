import React, { Component } from 'react';
import './App.css';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Welcome to <Text color="orange">Kenzie Town</Text></h1>
          <Text color="red">Joe Morrow</Text>
        </header>
      </div>
    );
  }
}

export default App;
