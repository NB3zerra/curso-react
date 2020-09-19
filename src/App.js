import React, { Component } from 'react';
import ListaDeNotas from './components/ListaNotas'
import FormularioCadastro from './components/FormularioCadastro'
import './assets/app.css'
import './assets/index.css';
class App extends Component {

  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newNoteArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteArray
    }
    this.setState(newState)
  }
  render() {
    return (
      <section className="content">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notas={this.state.notes} />
      </section>
    );
  }
}

export default App;
