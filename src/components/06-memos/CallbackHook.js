import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)
    
    const incrementar = useCallback((num)=>{
        setCounter(c=> c + num )
    }, [setCounter])

    
    return (
        <div>
            
            <h1>Callback hook: {counter}</h1>
            <hr />

            
            <ShowIncrement increment={incrementar}/>
        </div>
    )
}
