import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import puppyReducer from './redux/reducers/puppyReducers';
import loading from './redux/reducers/loadingReducers';
import availabilityFilterReducer from './redux/reducers/availabilityFilterReducers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

// Create the store
const store = createStore(combineReducers({puppyReducer, availabilityFilterReducer, loading}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
