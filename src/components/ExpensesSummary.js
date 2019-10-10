import React from 'react'
import { history } from '../App';
import './styles/ExpensesSummary.css'

export default function ExpensesSummary(props) {
    let totalExpense = 0
    props.visibleExpenses.forEach((expense) => {
        totalExpense += expense.amount
    })
    const expenseWord = props.visibleExpenses.length === 1 ? 'expense' : 'expenses'
    const hiddenCount = props.totalExpenses - props.visibleExpenses.length
    let details = <h2>Showing all expenses.</h2>
    if (hiddenCount > 0)
        details = <h2>Not showing<span> {hiddenCount} </span>{expenseWord}</h2>

    return (
        <div className="showcase">
            <div className="content-container">
                <h1>Viewing<span> {props.visibleExpenses.length} </span> {expenseWord} totalling <span>{totalExpense}$</span></h1>
                {details}
                <button onClick={() => history.push('/expensey/create')}>Create Expense</button>
            </div>
        </div>
    )
}
