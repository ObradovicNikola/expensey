import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary';
import { useSelector } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'


export default function ExpenseDashboardPage() {
    const expenses = useSelector(state => state.expenses)
    const filters = useSelector(state => state.filters)

    const visibleExpenses = getVisibleExpenses(expenses, filters)
    let totalExpense = 0
    expenses.forEach((expense) => {
        totalExpense += expense.amount
    })
    const expenseWord = visibleExpenses.length === 1 ? 'expense' : 'expenses'

    return (
        <div>
            <ExpensesSummary
                visibleExpenses={visibleExpenses}
                expenseWord={expenseWord}
                totalExpense={totalExpense}
            />
            <ExpenseListFilters />
            <ExpenseList visibleExpenses={visibleExpenses} />
        </div>
    )
}
