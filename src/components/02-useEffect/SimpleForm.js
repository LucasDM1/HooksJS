import React, { useEffect, useState } from 'react'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'', 
        email:''
    })
    const {name, email}= formState;
    
    useEffect(()=>{
        //console.log('Hola')
    },[]);

    useEffect(()=>{
        //console.log('Cambio formState')
    },[formState]);

    useEffect(()=>{
        //console.log('Cambio email')
    },[email]);

    

    const handleInputChange = ({target}) => {
        setFormState({...formState, 
        [target.name] : target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />   
            <div className="form-group">
                <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Nombre'
                value={name}
                onChange={handleInputChange}                
                >
                
                </input>

            </div>

            <div className="form-group">
                <input
                type='text'
                name='email'
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={handleInputChange}                
                >
                
                </input>

            </div>

            {(name==='123')&&<Message />}



        </>
    )   
}
