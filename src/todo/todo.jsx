import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.adicionaTarefa = this.adicionaTarefa.bind(this);
    }

    adicionaTarefa() {
        console.log("funciona o add");
    }

    render() {
        return (
            <div>
                <PageHeader titulo="Tarefas" subtitulo="Cadastro"/>
                <TodoForm funcaoAdd={this.adicionaTarefa}/>
                <TodoList />
            </div>
        )
    }
}