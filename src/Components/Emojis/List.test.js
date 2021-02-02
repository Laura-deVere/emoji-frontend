import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';
import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() });

const emojisList = [{
    "slug": "grinning-squinting-face",
    "character": "\ud83d\ude06",
    "unicodeName": "grinning squinting face",
    "codePoint": "1F606",
    "group": "smileys-emotion",
    "subGroup": "face-smiling"
}, {
    "slug": "grinning-squinting-face",
    "character": "\ud83d\ude06",
    "unicodeName": "grinning squinting face",
    "codePoint": "1F606",
    "group": "smileys-emotion",
    "subGroup": "face-smiling"
}];

describe('List', () => {

    const wrapper = shallow(<List emojis={emojisList} />);

    test('List renders with props', () => {
        expect(wrapper.length).toBe(1);
    });

    test('List renders `ListItem` component', () => {

        const emoji = {
            "slug": "grinning-squinting-face",
            "character": "\ud83d\ude06",
            "unicodeName": "grinning squinting face",
            "codePoint": "1F606",
            "group": "smileys-emotion",
            "subGroup": "face-smiling"
        }

        expect(wrapper.containsMatchingElement(<ListItem emoji={emoji} />)).toEqual(true);
    });
})
