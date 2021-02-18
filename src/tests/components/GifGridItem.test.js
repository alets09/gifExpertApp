import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('probar compente de GifGrid', () => {
    const title = 'titulo';
    const url='https://..';
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);

    test('mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de tener un parrafo con el title', () => {
       const p = wrapper.find('p');
       expect(p.text()).toBe(title); 
    });

    test('debe de tener la imagen igual al src y alt de los props', () => {
       const img = wrapper.find('img');

       expect(img.prop('src')).toBe(url);
       expect(img.prop('alt')).toBe(title); 
    });
    
    test('debe de tener la clase animate__fadeInTopLeft', () => {
       const div = wrapper.find('div');
       const className = div.prop('className');
   
       expect(className.includes('animate__fadeInTopLeft')).toBe(true);
    });
    
})
