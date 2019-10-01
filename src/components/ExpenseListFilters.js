import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

export default function ExpenseListFilters() {
    const textFilter = useSelector(state => state.filters.text)
    const sortFilter = useSelector(state => state.filters.sortBy)
    const dispatch = useDispatch()

    const sortBy = (text) => {
        if (text === 'date') {
            dispatch(sortByDate())
        } else dispatch(sortByAmount())
    }

    return (
        <div>
            <input type="text" value={textFilter} onChange={(e) => dispatch(setTextFilter(e.target.value))} />
            <select name="" id="" value={sortFilter} onChange={(e) => sortBy(e.target.value)}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}
