import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import { history } from '../App';
import getVisibleExpenses from '../selectors/expenses'

export default function ExpenseList(props) {
    // const expenses = useSelector(state => state.expenses)
    // const filters = useSelector(state => state.filters)

    // const visibleExpenses = getVisibleExpenses(expenses, filters)
    let expensesList = props.visibleExpenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
    ))
    // let totalExpense = 0
    // expenses.forEach((expense) => {
    //     totalExpense += expense.amount
    // })
    // const expenseWord = visibleExpenses.length === 1 ? 'expense' : 'expenses'

    // console.log(totalExpense)

    return (
        <div>
            <h1>Expense List</h1>
            {expensesList.length > 0 ? expensesList : <h1>No expenses</h1>}
        </div>
    )
}
