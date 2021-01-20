import React from 'react';
import { act, screen, render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";

import SignIn from './SignIn';

describe('Sign In', () => {
    test('Should render input fields and buttons', () => {
        render(<SignIn toggleForm={() => { }} />);

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