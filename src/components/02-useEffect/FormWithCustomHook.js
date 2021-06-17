import React from 'react'
import { useForms } from '../../hooks/useForms';


export const FormWithCustomHook= () => {

    const [formValues, handleInputChange] = useForms({
        name:'', 
        email:'', 
        password:''
    })
    const {name, email, password}= formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)

    }
    

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form with Custom Hook</h1>
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

            <div className="form-group">
                <input
                type='password'
                name='password'
                className='form-control'
                placeholder='****'
                value={password}
                onChange={handleInputChange}                
                >
                
                </input>

            </div>
            <button className='btn btn-primary' type="submit">
                Guardar
            </button>
        
        </form>
    )   
}
