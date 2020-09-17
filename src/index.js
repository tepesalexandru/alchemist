import React from 'react';
import ReactDOM from 'react-dom'
import './styles/styles.css';
import './styles/custom.css';

import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';



import App from './App';
import Homepage from './components/Homepage/index';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Homepage />
    </Provider>, document.getElementById("root"));