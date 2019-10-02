import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export default function EditExpensePage(props) {
    const expense = useSelector(state => state.expenses.find((item) => {
        return item.id === props.match.params.id
    }))
    const dispatch = useDispatch()

    return (
        <div>
            {expense && <div>
                <ExpenseForm
                    expense={expense}
                    onSubmit={(formExpense) => {
                        dispatch(editExpense(expense.id, formExpense))
                        props.history.push('/')
                    }} />
                <button onClick={() => { dispatch(removeExpense(expense.id)); props.history.push('/') }}>Remove</button>
            </div>}
            {!expense && <h1>Not valid expense!</h1>}
        </div>
    )
}
