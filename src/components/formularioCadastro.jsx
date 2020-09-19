import React, { Component } from 'react';


class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="titulo" />
                <textarea placeholder="Escreva sua nota">
                </textarea>
                <button>Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro