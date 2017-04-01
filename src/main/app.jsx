import 'bootstrap_min_css';
import 'fontawesome_min_css';

import React from 'react';
import Todo from '../todo/todo';
import Sobre from '../sobre/sobre';

export default props => (
    <div clssName='container'>
        <Todo/>
        <Sobre/>
    </div>
)