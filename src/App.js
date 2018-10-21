import React, { Component } from 'react';
import FormTaller from './components/FormTaller';
import ListaTalleres from './components/ListaTalleres';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lista : [{
        name: 'Taller 1 React',
        description: 'Estes es un taller chido, bueno no tanto.',
        attendes: 10,
      }],
    };
  }

  addLista = (theNew) => {
    this.setState({
      lista : [...this.state.lista, theNew],
    });
  };

  render() {
    const { lista } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tallerist</h1>
        </header>
        <section>
          <FormTaller addLista={this.addLista}/>
        </section>
        <section>
          <ListaTalleres lista={lista}/>
        </section>
      </div>
    );
  }
}

export default App;
