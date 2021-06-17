import { renderHook, act } from '@testing-library/react-hooks'
import { useForms } from '../../hooks/useForms'

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: "David",
        email: "lucas1965@hotmail.com"
    }

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForms(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe cambiar el valor del formulario (name only) ', () => {
        const { result } = renderHook(() => useForms(initialForm));
        const [, handleInputChange] = result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name:"name",
                    value: "Perro"
                }
            })
        })

        const [formValues] =result.current;
        expect(formValues).toEqual({...initialForm, name:'Perro'})
    });

    test('Debe de restablecer el formulario con reset', () => {
        const { result } = renderHook(() => useForms(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name:"name",
                    value: "Perro"
                }
            });
            reset()
            
        })

        const [formValues] =result.current;
        expect(formValues).toEqual(initialForm)

    })


})
