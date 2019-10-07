import React from 'react'
import { history } from '../App';
import './styles/ExpensesSummary.css'

export default function ExpensesSummary(props) {
    let totalExpense = 0
    props.visibleExpenses.forEach((expense) => {
        totalExpense += expense.amount
    })
    const expenseWord = props.visibleExpenses.length === 1 ? 'expense' : 'expenses'
    return (
        <div className="showcase">
            <div className="content-container">
                <h1>Viewing <span>{props.visibleExpenses.length}</span> {expenseWord} totalling <span>{totalExpense}$</span></h1>
                <button onClick={() => history.push('/create')}>Create Expense</button>
            </div>
        </div>
    )
}
