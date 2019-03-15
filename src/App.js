import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.state({ teste: 'teste' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Start</h1>
        </header>
      </div>
    );
  }
}

export default App;
