import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('pruebas al componente de GifExpertApp', () => {
   test('snapshot', () => {
      const wrapper = shallow(<GifExpertApp />); 
      expect(wrapper).toMatchSnapshot();
   });
    
});
