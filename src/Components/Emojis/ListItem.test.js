import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';

import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });

const emoji = {
    "slug": "grinning-squinting-face",
    "character": "\ud83d\ude06",
    "unicodeName": "grinning squinting face",
    "codePoint": "1F606",
    "group": "smileys-emotion",
    "subGroup": "face-smiling"
}

describe('Emoji list item', () => {
    const wrapper = shallow(<ListItem emoji={emoji} />);

    test('List item component renders emoji in li', () => {
        const listElement = findByTestAttr(wrapper, "emoji-list-item");
        // console.log(wrapper)
        expect(listElement.length).toBe(1);
    });

    test('List item should render div', () => {
        const container = findByTestAttr(wrapper, "emoji-container");
        expect(container.length).toBe(1);
    });

    test('List item should render `p` with emoji name', () => {
        const name = findByTestAttr(wrapper, "emoji-name");
        expect(name.text()).toEqual("grinning squinting face");
    });

    test('List item should render `span` with emoji', () => {
        const emojiCode = findByTestAttr(wrapper, "emoji-code");
        expect(emojiCode.text()).toEqual("&#x1F606;");
    });
})
