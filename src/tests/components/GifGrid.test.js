import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('pruebas para el componente GifGird', () => {
    const category = 'One punch';

    test('debera hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow( <GifGrid category={category} /> );   
        expect(wrapper).toMatchSnapshot(); 
    });
        
    test('debe de mostrar imagenes cuando se carga el useFechGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquier.jpg',
            title: 'title cualquiera' 
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category={category} /> ); 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
