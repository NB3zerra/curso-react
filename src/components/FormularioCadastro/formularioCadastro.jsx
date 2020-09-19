import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {

    constructor(){
        super()
        this.title = ""
    }

    handleTitlesSet(event) {
        this.title = event.target.value
    }

    render() {
        return (
            <form className="form-cadastro">
                <input
                    type="text"
                    placeholder="titulo"
                    className="form-cadastro_input"
                    onChange={this.handleTitleSet}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                >
                </textarea>
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro