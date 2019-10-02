import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import DatePicker from 'react-datepicker'

export default function ExpenseListFilters() {
    const textFilter = useSelector(state => state.filters.text)
    const sortFilter = useSelector(state => state.filters.sortBy)
    const startDateFilter = useSelector(state => state.filters.startDate)
    const endDateFilter = useSelector(state => state.filters.endDate)
    const dispatch = useDispatch()

    const sortBy = (text) => {
        if (text === 'date') {
            dispatch(sortByDate())
        } else dispatch(sortByAmount())
    }

    const resetDates = () => {
        dispatch(setStartDate())
        dispatch(setEndDate())
    }

    const onStartDateChange = (date) => {
        if (date) {
            dispatch(setStartDate(date.getTime()))
        }
    }

    const onEndDateChange = (date) => {
        if (date) {
            dispatch(setEndDate(date.getTime()))
        }
    }

    return (
        <div>
            <input type="text" value={textFilter} onChange={(e) => dispatch(setTextFilter(e.target.value))} />
            <select name="" id="" value={sortFilter} onChange={(e) => sortBy(e.target.value)}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DatePicker
                selected={startDateFilter}
                onChange={date => onStartDateChange(date)}
                selectsStart
                startDate={startDateFilter}
                endDate={endDateFilter}
                placeholderText="Start date"
                dateFormat="dd MMM yyyy"
            />
            <DatePicker
                selected={endDateFilter}
                onChange={date => onEndDateChange(date)}
                selectsEnd
                endDate={endDateFilter}
                minDate={startDateFilter}
                placeholderText="End date"
                dateFormat="dd MMM yyyy"
            />
            <button onClick={resetDates}>X</button>
        </div>
    )
}
