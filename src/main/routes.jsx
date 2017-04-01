import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Todo from '../todo/todo';
import Sobre from '../sobre/sobre';

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from="*" to="/todos" />
    </Router>
);
