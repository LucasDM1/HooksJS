import React from 'react'
import { useCounter } from '../../hooks/useCounter'


export const CounterCustomHook = () => {

    const {state, increment, decrement, reset}=useCounter(100)

    return (
        <>
        <h1>Counter with Hook {state} </h1>
        <hr/>

        <button className="btn btn-primary" onClick={()=> increment()}> +1 </button>
        <button className="btn btn-warning" onClick={reset}>Reset </button>
        <button className="btn btn-primary" onClick={()=> decrement()}> -1 </button>
    </>
    )
}
