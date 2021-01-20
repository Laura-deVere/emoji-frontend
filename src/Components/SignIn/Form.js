import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { form__input__column, form__button_primary } from '../../sass/Forms.module.scss';

const Form = () => {
    const defaultValues = {
        email: '',
        password: ''
    }

    const [formDetails, setFormDetails] = useState(defaultValues);
    const { register, handleSubmit, errors } = useForm();

    return (
        <form id="signInForm">
            <div className={form__input__column}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                />
            </div>
            <div className={form__input__column}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                />
            </div>
            <div className={form__input__column}>
                <button
                    type="submit"
                    className={form__button_primary}>Sign In
                </button>
            </div>
        </form>
    )
}

export default Form;