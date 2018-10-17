import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import puppyReducer from './redux/reducers/puppyReducers';
import availabilityFilterReducer from './redux/reducers/availabilityFilterReducers';
import {createPuppy, adoptPuppy} from "./redux/actions/puppyActions";
import {updateFilter} from "./redux/actions/availabilityFilterActions";

ReactDOM.render(<App/>, document.getElementById('root'));

// Create the store

const store = createStore(combineReducers({puppyReducer, availabilityFilterReducer}));

// Log the initial state - notice the different shape
console.log(store.getState());

// Dispatch actions to create a puppies
store.dispatch(createPuppy({
    name: 'Priscilla Queen',
    breed: 'Australian Shepherd',
    available: true,
    id: 1
}));

store.dispatch(createPuppy({
    name: 'Sean Connery',
    breed: 'Scottish Terrier',
    available: true,
    id: 2
}));

// Check that the state updated
console.log(store.getState());

store.dispatch(adoptPuppy(2));

store.dispatch(updateFilter('SHOW_AVAILABLE'));

// Check that the state updated
console.log(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
