import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import App from './App';

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  test('should render the app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  })
})
