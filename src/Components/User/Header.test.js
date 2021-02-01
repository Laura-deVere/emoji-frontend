import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';

import Header from './Header';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

describe('Header component renders img and name', () => {
    const wrapper = shallow(
        <Header firstName={'First'} lastName={'Last'} />
    );

    test('renders image', () => {
        const image = findByTestAttr(wrapper, "header-image");
        expect(image.length).toBe(1);
    });

    test('renders user name tag', () => {
        const name = findByTestAttr(wrapper, "header-username");
        expect(name.length).toBe(1);
    });

    test('Renders correct user name from props', () => {
        const name = findByTestAttr(wrapper, "header-username");
        expect(name.text()).toEqual('First Last');
    })
});