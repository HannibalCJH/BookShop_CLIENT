"use strict"
// React
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// react-router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import combined reducers
import reducers from './reducers/index';
// import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


// step 1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BooksForm} />
                <Route path="/cart" component={Cart} />
            </Route>
        </Router>
    </Provider>
);

render(
    Routes, document.getElementById('app')
);

// step 2 create and dispatch actions
//store.dispatch(postBooks(
    
//));

/*
// delete a book
store.dispatch(deleteBooks({id: 1}));

// update a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn React in 24h'
    }
));

// cart actions
// add to cart
store.dispatch(addToCart([{id: 1}]));
*/