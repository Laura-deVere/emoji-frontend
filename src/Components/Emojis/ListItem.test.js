import React from 'react';
import Enzyme, { render } from 'enzyme';
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
    // I used render so I could access the innerHTML text
    const wrapper = render(<ListItem emoji={emoji} />);

    test('List item component renders emoji in li', () => {
        const listElement = findByTestAttr(wrapper, "emoji-list-item");
        expect(listElement.children.length).toBe(1);
    });

    test('List item should render div', () => {
        const container = findByTestAttr(wrapper, "emoji-container");
        expect(container.length).toBe(1);
    });

    test('List item should render `p` with emoji name', () => {
        const name = findByTestAttr(wrapper, "emoji-name");
        expect(name.text()).toEqual("grinning squinting face");
    });

    test('List item should render div with a function to call test emoji string', () => {
        const emojiCode = findByTestAttr(wrapper, "emoji-code");
        expect(emojiCode.text()).toBe('😆');
    });
})
