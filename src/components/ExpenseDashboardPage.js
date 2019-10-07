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

    return (
        <div>
            <ExpensesSummary
                visibleExpenses={visibleExpenses}
            />
            <ExpenseListFilters />
            <ExpenseList visibleExpenses={visibleExpenses} />
        </div>
    )
}
