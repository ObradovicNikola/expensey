import React from 'react'
import { createStore } from 'redux'



export default function Redux() {
    const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    })

    const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type: 'DECREMENT',
        decrementBy
    })

    const resetCount = () => ({
        type: 'RESET'
    })

    const setCount = ({ count }) => ({
        type: 'SET',
        count
    })
    const store = createStore((state = { count: 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    count: state.count + (action.incrementBy ? action.incrementBy : 1)
                }
            case 'DECREMENT':
                return {
                    count: state.count - (action.decrementBy ? action.decrementBy : 1)
                }
            case 'RESET':
                return {
                    count: 0,
                }
            case 'SET':
                return {
                    count: action.count
                }
            default:
                return state
        }
    })

    // called every time state changes
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch(incrementCount({ incrementBy: 5 }))
    store.dispatch(incrementCount())


    store.dispatch(resetCount())
    store.dispatch(decrementCount())
    store.dispatch(decrementCount({ decrementBy: 3 }))
    store.dispatch(setCount({ count: 101 }))

    // call to stop executing subscribe code on changes
    unsubscribe()

    return (
        <div>
            <p>Store: </p>
        </div>
    )
}