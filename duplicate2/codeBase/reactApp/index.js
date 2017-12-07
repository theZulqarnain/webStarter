import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './main'

//ReactDOM.render(<Main />, document.getElementById('app'));

render((
    <HashRouter>
        <Main />
    </HashRouter>
),document.getElementById('app'));