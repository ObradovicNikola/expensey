import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import DatePicker from 'react-datepicker'
import './styles/ExpenseListFilters.css'

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
        <div className="content-container">
            <div className="input-group">
                <div className="input-group-item">
                    <input
                        type="text"
                        value={textFilter}
                        onChange={(e) => dispatch(setTextFilter(e.target.value))}
                        placeholder="Find expenses"
                    />
                </div>
                <div className="input-group-item" >
                    <select name="" id="" value={sortFilter} onChange={(e) => sortBy(e.target.value)}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="date-input">
                    <div className="input-group-item" style={{ 'width': 'auto' }}>
                        <DatePicker
                            selected={startDateFilter}
                            onChange={date => onStartDateChange(date)}
                            selectsStart
                            startDate={startDateFilter}
                            endDate={endDateFilter}
                            placeholderText="Start date"
                            dateFormat="dd MMM yyyy"
                        />
                    </div>
                    <span>&#8611;</span>
                    <div className="input-group-item date-picker">
                        <DatePicker
                            selected={endDateFilter}
                            onChange={date => onEndDateChange(date)}
                            selectsEnd
                            startDate={startDateFilter}
                            endDate={endDateFilter}
                            minDate={startDateFilter}
                            placeholderText="End date"
                            dateFormat="dd MMM yyyy"
                        />
                    </div>
                    <div className="input-group-item">
                        <button onClick={resetDates}>&#10754;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
