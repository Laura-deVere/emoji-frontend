import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';

import AddEmojiButton from './AddEmojiButton';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

test('Component renders button', () => {
    const wrapper = shallow(<AddEmojiButton />);
    const button = findByTestAttr(wrapper, "add-new-button");
    expect(button.length).toBe(1);
});
