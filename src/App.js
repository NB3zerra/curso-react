import React from 'react';
import  ListaDeNotas  from './components/listaNotas'

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Escreva sua nota">
        </textarea>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;
