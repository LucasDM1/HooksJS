import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter()

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

   const ptag = useRef()
   
    useLayoutEffect(() => {
       
       console.log(ptag.current.getBoundingClientRect())
   }, [quote])


    return (
        <div>
            <h1>LayOut Effect </h1>
            <hr />



            <blockquote className='blockquote text-right'>
                <p 
                    className="mb-3"
                    ref={ptag}
                > {quote} </p>
                {/* <footer className="blockquote-footer"> {author} </footer> */}
            </blockquote>

            <button className="btn btn-primary" onClick={increment}>
                Cambiar Frase

            </button>

        </div>
    )
}
