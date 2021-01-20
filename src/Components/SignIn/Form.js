import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { form__input__column, form__button_primary } from '../../sass/Forms.module.scss';

const Form = ({ handleFormSubmit }) => {
    const defaultValues = {
        email: '',
        password: ''
    }

    const [formDetails, setFormDetails] = useState(defaultValues);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value });
    }

    return (
        <form
            id="signInForm" data-testid="signin-form"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className={form__input__column}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    ref={register({
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                    })}
                />
                {errors.email && errors.email.type === "required" && (
                    <p className={null}>Email is required.</p>
                )}
            </div>
            <div className={form__input__column}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    ref={register({ required: true, minLength: 8 })}
                />
                {errors.password && errors.password.type === "required" && (
                    <p className={null}>Password is required.</p>
                )}
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

Form.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired
}

export default Form;