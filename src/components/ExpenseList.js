import React from 'react'
import ExpenseListItem from './ExpenseListItem'

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
        <div className="content-container">
            {expensesList.length > 0 &&
                <div className="list-item">
                    <div style={{ 'color': 'grey' }}>
                        <p>{expensesList.length > 1 ? 'Expenses' : 'Expense'}:</p>
                    </div>
                    <div className="hide-on-mobile">
                        <p>Amount</p>
                    </div>
                </div>
            }
            {expensesList.length > 0 ? expensesList : <h1 style={{ 'textAlign': 'center' }}>No expenses</h1>}
        </div>
    )
}
