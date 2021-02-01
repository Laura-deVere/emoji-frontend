import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';
import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('List', () => {

    const wrapper = shallow(<List emojis={[]} />);

    test('List renders with props', () => {
        expect(wrapper.length).toBe(1);
    });

    test('List renders `ListItem` component', () => {
        expect(wrapper.containsMatchingElement(<ListItem />)).toEqual(true);
    });
})
