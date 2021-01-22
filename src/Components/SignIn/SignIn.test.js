import React from 'react';
import { screen, render } from '@testing-library/react';
import "@testing-library/jest-dom";

import { storeFactory } from '../../test/testUtils';

import SignIn from './SignIn';

describe('Sign In', () => {

    test('Should render input fields and buttons', () => {
        // because this component is connect to the redux store
        const initialState = {};
        const store = storeFactory(initialState);
        render(<SignIn store={store} toggleForm={() => { }} />);

        expect(
            screen.getByLabelText('Email', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Password', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Sign In/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Sign Up/i })
        ).toBeInTheDocument();

    });
});