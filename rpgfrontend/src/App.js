import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    cidades: []
  };

  componentDidMount() {
    
    fetch('/cidades')
      .then(response => response.json())
      .then(data => this.setState({cidades: data}));
  }

  render() {
    const {cidades} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Cidades</h2>
            {cidades.map((cidade) =>
              <div key={cidade.id}>
                {cidade.nome} - {cidade.tesouro}
              </div>  
            )}
          </div>
        </header>
      </div>
    )

  }

}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
