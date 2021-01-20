import React from 'react';
import { act, screen, render, getByRole, getByLabelText, fireEvent, getByTestId, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignUp from './SignUp';

// React Testing Library renders our components, replicating the DOM that the end - user will see.It then provides utility methods to interact with this DOM
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
            screen.getByLabelText('Confirm', { selector: 'input' })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Sign Up/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /Sign In/i })
        ).toBeInTheDocument();
    });
    describe('Sign Up form behaviour', () => {
        test('validates user inputs and displays an error message', async () => {
            const { getByText, getByTestId } = render(<SignUp />);

            // act - All it does is forward all arguments to the act function
            await act(async () => {
                fireEvent.submit(getByTestId('signup-form'));
            });

            expect(getByText('First name is required.')).toBeInTheDocument();
            expect(getByText('Email is required.')).toBeInTheDocument();
            expect(getByText('Password is required.')).toBeInTheDocument();
            expect(getByText('Password confirmation is required.')).toBeInTheDocument();
        });
        test('Validates user input and submits form with no errors', async () => {
            const { getByTestId, queryByText } = render(<SignUp />);

            const formProps = {
                firstName: "Shmaura",
                lastName: "Shmopkins",
                email: "laura@laura.com",
                password: "12345678",
                confirmPassword: "12345678"
            }

            await act(async () => {
                fireEvent.change(screen.getByLabelText(/First Name/i), {
                    target: { value: formProps.firstName }
                });
                fireEvent.change(screen.getByLabelText(/Email/i), {
                    target: { value: formProps.email }
                });
                fireEvent.change(screen.getByLabelText(/Password/i), {
                    target: { value: formProps.password }
                });
                fireEvent.change(screen.getByLabelText(/Confirm/i), {
                    target: { value: formProps.confirmPassword }
                });
            });

            await act(async () => {
                fireEvent.click(getByTestId('signup-form'));
            });

            // getBy will throw an error if it doesn't find what it's looking for, where queryBy will return null if it can't find what its looking for. This way the tests can continue without error.
            expect(queryByText('First name is required.')).not.toBeInTheDocument();
            expect(queryByText('Email is required.')).not.toBeInTheDocument();
            expect(queryByText('Password is required.')).not.toBeInTheDocument();
            expect(queryByText('Password confirmation is required.')).not.toBeInTheDocument();
        });
    });
});
