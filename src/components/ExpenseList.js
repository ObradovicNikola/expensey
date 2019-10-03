import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

export default function ExpenseList() {
    const expenses = useSelector(state => state.expenses)
    const filters = useSelector(state => state.filters)

    const visibleExpenses = getVisibleExpenses(expenses, filters)
    let expensesList = visibleExpenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
    ))

    return (
        <div>
            <h1>Expense List</h1>
            {expensesList.length > 0 ? expensesList : <h1>No expenses</h1>}
        </div>
    )
}
