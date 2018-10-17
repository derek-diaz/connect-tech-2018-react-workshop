import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import puppyReducer from '../src/puppyReducers';

ReactDOM.render(<App/>, document.getElementById('root'));

// Create the store
const store = createStore(puppyReducer);

console.log(store.getState());

store.dispatch({
    type: 'CREATE_PUPPY',
    data: {
        name: 'Priscilla Queen of the Desert',
        breed: 'Australian Shepherd',
    }
});

console.log(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
