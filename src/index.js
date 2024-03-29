import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,  compose } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhansers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);