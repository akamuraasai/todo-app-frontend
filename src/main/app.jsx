import 'bootstrap_min_css';
import 'fontawesome_min_css';

import React from 'react';
import Menu from '../template/menu';
import Routes from './routes';

export default props => (
    <div className='container'>
        <Menu/>
        <Routes/>

    </div>
)