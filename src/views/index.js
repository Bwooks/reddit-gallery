import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import {Provider} from 'react-redux';
import configureStore from './store.js';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);