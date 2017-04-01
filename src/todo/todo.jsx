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
        this.marcaFeito = this.marcaFeito.bind(this);
        this.marcaDesfeito = this.marcaDesfeito.bind(this);
        this.fazBusca = this.fazBusca.bind(this);

        this.refresh();
    }

    refresh(descricao = '') {
        const pesquisa = descricao ? `&descricao__regex=/${descricao}/` : '';

        Axios.get(`${URL}?sort=-criadoEm${pesquisa}`)
             .then(dados => this.setState({...this.state, descricao, lista: dados.data}));
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
             .then(dados => this.refresh(this.state.descricao));
    }

    marcaFeito(tarefa) {
        Axios.put(`${URL}/${tarefa._id}`, { ...tarefa, feito: true })
             .then(dados => this.refresh(this.state.descricao));
    }

    marcaDesfeito(tarefa) {
        Axios.put(`${URL}/${tarefa._id}`, { ...tarefa, feito: false })
            .then(dados => this.refresh(this.state.descricao));
    }

    fazBusca() {
        this.refresh(this.state.descricao);
    }

    render() {
        return (
            <div>
                <PageHeader titulo="Tarefas" subtitulo="Cadastro"/>
                <TodoForm descricao={this.state.descricao} funcaoMudanca={this.aceitaMudanca} funcaoAdd={this.adicionaTarefa} funcaoBusca={this.fazBusca}/>
                <TodoList funcaoFeito={this.marcaFeito} funcaoDesfeito={this.marcaDesfeito} funcaoRemover={this.removeTarefa} lista={this.state.lista} />
            </div>
        )
    }
}