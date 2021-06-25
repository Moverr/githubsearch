import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import Buttonfield from '../ButtonField';
 


describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = { };

      const wrapper = shallow(<Buttonfield props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 