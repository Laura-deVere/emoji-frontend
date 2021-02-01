import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { storeFactory } from '../../test/testUtils';

import CurrentUser from './CurrentUser';
import Header from './Header';
import AddEmojiButton from './AddEmojiButton';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// Mock Store
const setup = (state = {}) => {
    const store = storeFactory(state);
    // .dive returns the react chikd component of shallow wrapper
    const wrapper = shallow(<CurrentUser store={store} />).dive().dive();
    return wrapper;
}

const state = {
    auth: {
        isAuthenticated: false,
        user: {
            // duration: 3600
            email: "email@gmail.com",
            emojis: [],
            // exp: 1611960836
            fname: "First",
            // iat: 1611957236
            lname: "Last"
        }
    },
    error: {}
}

describe('Current user page', () => {
    const wrapper = setup(state);

    test('renders `Header` component', () => {
        expect(wrapper.containsMatchingElement(<Header firstName={'First'} lastName={'Last'} />)).toEqual(true);
    });

    test('renders `Add new emoji button`', () => {
        expect(wrapper.containsMatchingElement(<AddEmojiButton />)).toEqual(true);
    });

});