import React from 'react'
import ExpenseForm from './ExpenseForm'
import { useDispatch } from 'react-redux'
import { startAddExpense } from '../actions/expenses'


export default function AddExpensePage(props) {
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="page-title" style={{ 'marginTop': '20px' }}>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    dispatch(startAddExpense(expense)).then(() =>
                        /// loading popup modal for user experience 
                        props.history.push('/expensey/')
                    )
                }}
            />
        </div>
    )
}
