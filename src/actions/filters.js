export const setTextFilter = (newText = '') => ({
    type: 'SET_TEXT_FILTER',
    newText
})

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})