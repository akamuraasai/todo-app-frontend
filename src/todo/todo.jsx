import React, { Component } from 'react';
import Axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { descricao: '', lista: [] };

        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.aceitaMudanca = this.aceitaMudanca.bind(this);
        this.removeTarefa = this.removeTarefa.bind(this);

        this.refresh();
    }

    refresh() {
        Axios.get(`${URL}?sort=-criadoEm`)
             .then(dados => this.setState({...this.state, descricao: '', lista: dados.data}));
    }

    aceitaMudanca(e) {
        this.setState({...this.state, descricao: e.target.value});
    }

    adicionaTarefa() {
        const descricao = this.state.descricao;
        Axios.post(URL, { descricao })
             .then(dados => this.refresh());
    }

    removeTarefa(tarefa) {
        Axios.delete(`${URL}/${tarefa._id}`)
             .then(dados => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader titulo="Tarefas" subtitulo="Cadastro"/>
                <TodoForm descricao={this.state.descricao} funcaoMudanca={this.aceitaMudanca} funcaoAdd={this.adicionaTarefa}/>
                <TodoList funcaoRemover={this.removeTarefa} lista={this.state.lista} />
            </div>
        )
    }
}