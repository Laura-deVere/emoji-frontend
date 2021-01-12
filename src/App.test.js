import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import App from './App';
import LandingPage from './Components/LandingPage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  const wrapper = shallow(<App />);
  test('should render the app component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  test('App should render `Nav` component', () => {
    expect(wrapper.containsMatchingElement(<Nav />)).toEqual(true);
  });
  test('App should render `Landing page` component', () => {
    expect(wrapper.containsMatchingElement(<LandingPage />)).toEqual(true);
  });
  test('App should render `Footer` component', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
})
