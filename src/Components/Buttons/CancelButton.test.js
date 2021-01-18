import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { checkProps, findByTestAttr } from '../../test/testUtils';

import CancelButton from './CancelButton';

Enzyme.configure({ adapter: new Adapter() });

describe('CancelButton', () => {

    describe('Button PropTypes', () => {
        test('Should recieve props without warning', () => {
            const expectedProps = {
                updateModalVisibility: () => { }
            };
            const propsError = checkProps(CancelButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Button rendering', () => {
        let wrapper, mockFn;

        beforeEach(() => {
            mockFn = jest.fn();
            const props = {
                updateModalVisibility: mockFn
            };
            wrapper = shallow(<CancelButton {...props} />);
        });

        test('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'cancel-button');
            expect(button.length).toBe(1);
        });

        test('Should fire callback on click', () => {
            const button = findByTestAttr(wrapper, 'cancel-button');
            button.simulate('click');
            const callback = mockFn.mock.calls.length;
            expect(callback).toBe(1);
        })
    })
});