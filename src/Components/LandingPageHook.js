// import React from 'react';
// import { render, fireEvent, getByTestId, cleanup, getByText } from "@testing-library/react";

// // Component
// import LandingPage from './LandingPage';

// afterEach(cleanup);

// it('On `Get started` button click modal view state should update', () => {
//     const { container } = render(<LandingPage />);
//     expect(getByText(/intial/i).textContent).toBe(true);
//     const button = getByTestId(container, "getStartedButton");
//     fireEvent.click(button);
//     expect(getByText(/intial/i).textContent).toBe(false);
// })