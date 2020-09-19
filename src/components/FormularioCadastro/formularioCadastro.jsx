import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.title = ""
        this.text = ""
    }

    _handleTitleSet(event) {
        event.stopPropagation()
        this.title = event.target.value
    }

    _handleTextSet(event) {
        event.stopPropagation()
        this.text = event.target.value
    }

    _createNote(event) {
        event.preventDefault()
        event.stopPropagation()
        this.props.createNote(this.title, this.text)
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this._createNote.bind(this)}
            >
                <input
                    type="text"
                    placeholder="titulo"
                    className="form-cadastro_input"
                    onChange={this._handleTitleSet.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleTextSet.bind(this)}
                >
                </textarea>
                <button
                    className="form-cadastro_input form-cadastro_submit"

                >
                    Criar nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro