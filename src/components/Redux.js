import React from 'react'
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


export default function Redux() {
    const demoState = {
        expenses: [{
            id: 'pasgfassg',
            description: 'rent nov',
            note: 'important',
            amount: 300,
            createdAt: 0
        }],
        filters: {
            text: 'rent',
            sortBy: 'amount', //date or amount
            startDate: undefined,
            endDate: undefined
        }
    }

    // Expenses reducer
    const addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    })

    const expensesReducerDefaultState = []

    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return state.concat(action.expense)
            default:
                return state
        }
    }

    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined

    }

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {

            default:
                return state
        }
    }

    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch(addExpense({ description: 'Rent', amount: 300 }))

    // called every time state changes
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    })

    // call to stop executing subscribe code on changes
    unsubscribe()

    return (
        <div>
            <p>Store: </p>
        </div>
    )
}