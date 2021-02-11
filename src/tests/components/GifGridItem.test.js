import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('probar compente de GifGrid', () => {
    test('mostrar el componente correctamente', () => {
        const title = 'titulo';
        const url='https://..';
        const wrapper = shallow( <GifGridItem title={title} url={url}/>);

        expect(wrapper).toMatchSnapshot();
    })
    
})
