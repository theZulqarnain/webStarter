import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './components/main'
import reducer from './reducers'

const store = createStore(reducer);

//ReactDOM.render(<Main />, document.getElementById('app'));

render((
    <Provider store={store}>
        <HashRouter>
        <Main />
        </HashRouter>
    </Provider>
),document.getElementById('app'));