import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startRemoveExpense } from '../actions/expenses'

export default function ExpenseListItem({ description, amount, createdAt, id }) {
    const dispatch = useDispatch()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',]
    let date = new Date(createdAt)
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <p>Description: {description}</p>
            </Link>
            <p>Amount: {amount}</p>
            {/* <p>Created at: {new Date(createdAt).toString('dd MMM yyyy')}</p> */}
            <p>Created at: {(dayOfMonth < 10 ? '0' : '') + `${dayOfMonth} ${months[month]} ${year}`}</p>
            <button onClick={() => dispatch(startRemoveExpense(id))}>Remove</button>
        </div>
    )
}
