// Filters reducer

const date = new Date()
const startDateFilter = new Date(date.getFullYear(), date.getMonth(), 1);
const endDateFilter = new Date(date.getFullYear(), date.getMonth() + 1, 0)

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: startDateFilter.getTime(),
    endDate: endDateFilter.getTime()
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.newText }
        case 'SORT_BY_AMOUNT':
        case 'SORT_BY_DATE':
            return { ...state, sortBy: action.sortBy }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state
    }
}

export default filtersReducer