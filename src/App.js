import React, { Component } from 'react';
import ListaDeNotas from './components/ListaNotas'
import FormularioCadastro from './components/FormularioCadastro'
import './assets/app.css'
import './assets/index.css';
class App extends Component {
  render() {
    return (
      <section className="content">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
