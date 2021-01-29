import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrentUser from './CurrentUser';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });


describe('Current user page', () => {
    const wrapper = shallow(<CurrentUser />);

    test('renders without error', () => {
        shallow(<CurrentUser />);
    });

});