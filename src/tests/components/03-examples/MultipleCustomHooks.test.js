import { shallow } from "enzyme";
import React from "react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch")
//jest.mock("../../../hooks/useCounter")

describe('Pruebas de MultipleCustomHooks', () => {

    // useCounter.mockReturnValue({
    //     counter: 1, 
    //     increment: ()=>{}
    // });




    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar la informacion ', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'David',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('David')

       // console.log(wrapper.html())
    })


})
