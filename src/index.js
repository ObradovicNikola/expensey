import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { history } from './App';
import * as serviceWorker from './serviceWorker';
// import './firebase/firebase'
import { firebase } from './firebase/firebase'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import { Provider } from 'react-redux'
import LoadingPage from './components/LoadingPage'

require('dotenv').config()
// const SuperAgent = require('superagent');

// import dotenv from 'dotenv'
// import errorReporter from './errorReporter'


const store = configureStore()
const myApp = (
    <Provider store={store}>
        <App />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(myApp, document.getElementById('root'));
        hasRendered = true
    }
}
// const unsubscribe = store.subscribe(() => {
//     const state = store.getState()
//     console.log(state.filters.text)
// })
// store.dispatch(addExpense({ id: 1, description: 'water bill', amount: 50, createdAt: new Date().getTime() }))
// store.dispatch(addExpense({ id: 2, description: 'gas bill', amount: 100, createdAt: 1000 }))
// store.dispatch(addExpense({ id: 3, description: 'rent', amount: 300 }))

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// console.log(visibleExpenses);

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/expensey/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/expensey/')
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
