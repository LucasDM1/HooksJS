import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'



export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(false);

   
    const memoPesado=useMemo(() => procesoPesado(counter), [ counter ])


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter} </h3>
            <hr />
            <p>{memoPesado}</p>


            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)} 
            </button>

        </div>
    )
}
