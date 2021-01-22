import React from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

import Form from './Form';

describe('Sign in form component', () => {

    test('When form data is empty, an onSubmit call should have errors messages in the document', async () => {
        const { getByText, getByTestId } = render(
            <Form handleFormSubmit={() => { }} />
        );

        await act(async () => {
            fireEvent.submit(getByTestId('signin-form'));
        });

        expect(getByText('Email is required.')).toBeInTheDocument();
        expect(getByText('Password is required.')).toBeInTheDocument();
    });

    test('When form data changes, an onSubmit call should NOT have errors messages in the document', async () => {
        const { getByTestId, queryByText } = render(
            <Form handleFormSubmit={() => { }} />
        );

        const formProps = {
            email: "laura@laura.com",
            password: "12345678"
        }

        await act(async () => {
            fireEvent.change(screen.getByLabelText(/Email/i), {
                target: { value: formProps.email }
            });
            fireEvent.change(screen.getByLabelText(/Password/i), {
                target: { value: formProps.password }
            });
        });

        await act(async () => {
            fireEvent.submit(getByTestId('signin-form'));
        });

        expect(queryByText('Email is required.')).not.toBeInTheDocument();
        expect(queryByText('Password is required.')).not.toBeInTheDocument();
    });
});