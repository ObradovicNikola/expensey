import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startRemoveExpense } from '../actions/expenses'
import './styles/ExpenseListItem.css'

export default function ExpenseListItem({ description, amount, createdAt, id }) {
    const dispatch = useDispatch()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',]
    let date = new Date(createdAt)
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return (
        <div>
            <Link
                to={`/edit/${id}`}
                style={{}}
                className="list-item"
            >
                <div>
                    <p>{description}</p>
                    <p style={{ 'color': 'grey' }}>{(dayOfMonth < 10 ? '0' : '') + `${dayOfMonth} ${months[month]} ${year}`}</p>
                    {/* <button onClick={() => dispatch(startRemoveExpense(id))}>Remove</button> */}
                </div>
                <div className="hide-on-mobile">
                    <p>{amount}$</p>
                </div>
            </Link>
            {/* <p>Created at: {new Date(createdAt).toString('dd MMM yyyy')}</p> */}
        </div>
    )
}
