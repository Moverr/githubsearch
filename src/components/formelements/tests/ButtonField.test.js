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

  it(' should respond to click event ',() =>{
      const mockCallBAck = jest.fn();
      const props = {
        title:"Button Title",
        name:'Button Name',
        message:'Button Message',
        className:'buttonField',
        id:"buttonID",
        callback:mockCallBAck()
    };
      const button = shallow(<Buttonfield props ><i>movers</i></Buttonfield>);
      button.find('button').simulate('click'); 
     expect(mockCallBAck).toHaveBeenCalled();      
     expect(mockCallBAck).toHaveBeenCalledTimes(1);
});

})



 