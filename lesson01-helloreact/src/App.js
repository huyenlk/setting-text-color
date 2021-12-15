import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            De bat dau hoc vui long truy cap <code>src/App.js</code> Chinh sua va luu lai.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chao mung den voi khoa hoc react
          </a>
        </header>
      </div>
    );
  }
}

export default App;
