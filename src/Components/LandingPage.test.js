import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import LandingPage from './LandingPage';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

describe('Landing Page', () => {
    const wrapper = shallow(<LandingPage />);
    test('Should render `Get started` button', () => {
        const button = wrapper.find(`[data-test="getStartedButton"]`);
        expect(button.length).toBe(1);
    });

    // test('On `Get started` button click modal view state should update', () => {
    //     const mockSetShowModal = jest.fn();
    //     // React.useState = jest.fn(() => [true, mockSetShowModal]);

    //     const button = wrapper.find(`[data-test="getStartedButton"]`);

    //     button.simulate('click');
    //     expect(mockSetShowModal).toBeInstanceOf(Function);
    //     // expect(mockSetShowModal).toHaveBeenCalled();
    // })
});