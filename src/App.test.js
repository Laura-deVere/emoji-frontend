import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { storeFactory } from "./test/testUtils";

// Component
import App from './App';
import LandingPage from './Components/LandingPage';
import CurrentUser from './Components/User/CurrentUser';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

// Mock Store
const setup = (state = {}) => {
  const store = storeFactory(state);
  // .dive returns the react chikd component of shallow wrapper
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('App render with correct components with no current user', () => {

  const isNotAuthenticated = {
    // currentUser: false
    auth: {
      isAuthenticated: false,
      user: null
    },
    error: {}
  }

  const wrapper = setup(isNotAuthenticated);

  test('should render the app component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  // containsMatchingElement -- whether or not the current wrapper has a node anywhere in its render tree that matches the one passed in.
  test('App should render `Nav` component', () => {
    expect(wrapper.containsMatchingElement(<Nav />)).toEqual(true);
  });
  test('App should render `Landing page` component', () => {
    expect(wrapper.containsMatchingElement(<LandingPage />)).toEqual(true);
  });
  test('App should render `Footer` component', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
  test('App should not render Current User component', () => {
    expect(wrapper.find(<CurrentUser />)).toHaveLength(0);
    // expect(wrapper.containsMatchingElement(<CurrentUser />)).toEqual(false);
  });
});
