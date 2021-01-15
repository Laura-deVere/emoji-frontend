import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Component 
import Modal from './Modal';
import SignUp from '../SignUp/SignUp';
import CancelButton from '../Buttons/CancelButton';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Modal
                isVisible={true}
                updateModalVisibility={jest.fn()}
            />
        );
    });
    test('Modal should render `div`', () => {
        const modal = wrapper.find('div');
        expect(modal.length).toBe(3)
    });
    test('Modal should render `Sign Up` form', () => {
        expect(wrapper.containsMatchingElement(<SignUp />)).toEqual(true);
    });
    test('Modal should render `cancel` button', () => {
        expect(wrapper.containsMatchingElement(<CancelButton updateModalVisibility={jest.fn()} />)).toEqual(false);
    });
});