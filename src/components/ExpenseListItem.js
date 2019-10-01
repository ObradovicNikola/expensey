import React from 'react'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../actions/expenses'

export default function ExpenseListItem({ description, amount, createdAt, id }) {
    const disptach = useDispatch()

    return (
        <div>
            <p>Description: {description}</p>
            <p>Amount: {amount}</p>
            <p>Created at: {createdAt}</p>
            <button onClick={() => disptach(removeExpense(id))}>Remove</button>
        </div>
    )
}
