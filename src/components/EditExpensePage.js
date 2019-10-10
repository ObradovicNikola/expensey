import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

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
                    removeButton={(<button
                        onClick={() => {
                            dispatch(startRemoveExpense(expense.id)).then(() => {
                                props.history.push('/expensey/')
                            })
                        }}
                        type="button"
                    >Remove</button>)}
                    onSubmit={(formExpense) => {
                        dispatch(startEditExpense(expense.id, formExpense)).then(() =>
                            /// loading popup modal for user experience 
                            props.history.push('/expensey/')
                        )
                    }} />
            </div>}
            {!expense && <h1>Not valid expense!</h1>}
        </div>
    )
}
