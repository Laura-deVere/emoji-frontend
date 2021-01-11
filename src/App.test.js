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
    expect(wrapper.length).toBe(1);
  });
  test('App should render `Nav` component', () => {
    const component = wrapper.find(Nav);
    expect(component.length).toBe(0);
  });
  test('App should render `Landing page` component', () => {
    const component = wrapper.find(LandingPage);
    expect(component.length).toBe(0);
  });
  test('App should render `Footer` component', () => {
    const component = wrapper.find(Footer);
    expect(component.length).toBe(0);
  });
})
