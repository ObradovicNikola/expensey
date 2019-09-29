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

    const removeExpense = ({ id } = {}) => ({
        // if (!id) {
        //     console.log('error removing item: invalid id');
        // } else {

        // }
        type: 'REMOVE_EXPENSE',
        expense: {
            id
        }
    })

    const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })

    const expensesReducerDefaultState = []

    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                return state.concat(action.expense)
            case 'REMOVE_EXPENSE':
                return state.filter(item => item.id !== action.expense.id)
            case 'EDIT_EXPENSE':
                return state.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            ...action.updates
                        }
                    } else return item
                })
            default:
                return state
        }
    }



    const setTextFilter = (newText = '') => ({
        type: 'SET_TEXT_FILTER',
        newText
    })

    const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
    const sortByDate = () => ({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })

    const setStartDate = (startDate = undefined) => ({
        type: 'SET_START_DATE',
        startDate
    })

    const setEndDate = (endDate = undefined) => ({
        type: 'SET_END_DATE',
        endDate
    })

    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            case 'SET_TEXT_FILTER':
                return { ...state, text: action.newText }
            case 'SORT_BY_AMOUNT':
            case 'SORT_BY_DATE':
                return { ...state, sortBy: action.sortBy }
            case 'SET_START_DATE':
                return { ...state, startDate: action.startDate }
            case 'SET_END_DATE':
                return { ...state, endDate: action.endDate }
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

    // Get visible expenses

    const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

            return startDateMatch && endDateMatch && textMatch
        }).sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1
            }
        })
    }


    // called every time state changes
    const unsubscribe = store.subscribe(() => {
        const state = store.getState()
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
        console.log(visibleExpenses)
    })
    const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: -1000 }))
    const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 100, createdAt: 1000 }))

    // store.dispatch(removeExpense({ id: expenseOne.expense.id }))


    store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }))

    // store.dispatch(setTextFilter('rent'))

    store.dispatch(sortByAmount())
    store.dispatch(sortByDate())




    // store.dispatch(setStartDate(123))
    // store.dispatch(setStartDate())

    // store.dispatch(setEndDate(222))
    // store.dispatch(setEndDate(999))


    // call to stop executing subscribe code on changes
    unsubscribe()

    return (
        <div>
            <p>Store: </p>
        </div>
    )
}
