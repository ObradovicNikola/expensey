import React from 'react'
import { history } from '../App';

export default function ExpensesSummary(props) {
    return (
        <div className="showcase">
            <h1>Viewing {props.visibleExpenses.length} {props.expenseWord} totalling {props.totalExpense}$</h1>
            <button onClick={() => history.push('/create')}>Create Expense</button>
        </div>
    )
}
