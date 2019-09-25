import React from 'react'
import { createStore } from 'redux'



export default function Redux() {
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
            default:
                return state
        }
    })

    // called every time state changes
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch({
        type: 'INCREMENT',
        incrementBy: 5
    })

    // call to stop executing subscribe code on changes
    // unsubscribe()

    store.dispatch({
        type: 'INCREMENT'
    })

    store.dispatch({
        type: 'RESET'
    })

    store.dispatch({
        type: 'DECREMENT'
    })

    store.dispatch({
        type: 'DECREMENT',
        decrementBy: 3
    })

    return (
        <div>
            <p>Store:</p>
        </div>
    )
}