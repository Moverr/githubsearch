import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import Avatar from '../Avatar';
 


describe('Testing Avatar ', () => {
  it('should  render correctly', () => {    
    const props = { };

      const wrapper = shallow(<Avatar props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 