import React from 'react';
import { screen, render, getByRole, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignUp from './SignUp';

describe('Signup', () => {
    test('Should render input fields', () => {
        // mounts the component
        render(<SignUp />);

        // Using getByRole is preferable when testing dom elements, it ensures your app is accessible to everyone
        expect(
            // the name property will read the label, thats why name is `First Name` and not `firstName`
            screen.getByRole('textbox', { name: /First Name/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('textbox', { name: /Last Name/i })
        ).toBeInTheDocument();
        // using getByLabelText because the input elements don't have aria-roles
        expect(
            screen.getByLabelText('Email', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Password', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('Confirm Password', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Sign Up/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /Sign In/i })
        ).toBeInTheDocument();
    });
});
