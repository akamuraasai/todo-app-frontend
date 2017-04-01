import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { descricao: '', lista: [] };

        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.aceitaMudanca = this.aceitaMudanca.bind(this);
    }

    aceitaMudanca(e) {
        this.setState({...this.state, descricao: e.target.value});
    }

    adicionaTarefa() {
        console.log("funciona o add");
    }

    render() {
        return (
            <div>
                <PageHeader titulo="Tarefas" subtitulo="Cadastro"/>
                <TodoForm descricao={this.state.descricao} funcaoMudanca={this.aceitaMudanca} funcaoAdd={this.adicionaTarefa}/>
                <TodoList />
            </div>
        )
    }
}