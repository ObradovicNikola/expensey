import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { Provider } from 'react-redux'

const store = configureStore()
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

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
