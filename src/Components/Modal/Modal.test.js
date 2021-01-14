import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Component 
import Modal from './Modal';
import SignUp from '../SignUp';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
    const wrapper = shallow(<Modal />);
    test('Modal should render `div`', () => {
        const modal = wrapper.find('div');
        expect(modal.length).toBe(1)
    });
    test('Modal should render `Sign Up` form', () => {
        expect(wrapper.containsMatchingElement(<SignUp />)).toEqual(true);
    });
    test('Modal should render `cancel` button', () => {
        const button = wrapper.find('[data-test="cancel-button"]');
        expect(button.length).toBe(1);
    });
});