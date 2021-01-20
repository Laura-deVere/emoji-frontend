import { useForm } from 'react-hook-form';
import { form__signup } from './Signup.module.scss';
import { form__input__column, form__button_primary, form__logo__emoji } from '../../sass/Forms.module.scss';
import { useState } from 'react';

// Break this into two Files, one functionality and one form
const SignUp = ({ toggleForm }) => {
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [formDetails, setFormDetails] = useState(defaultValues);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value });
        console.log(formDetails);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={form__signup}>
            <div className={form__logo__emoji}>
                <span>😁</span>
            </div>
            <form data-testid="signup-form" id="signupForm" onSubmit={handleSubmit(onSubmit)}>
                <div className={form__input__column}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName" type="text" name="firstName"
                        defaultValue={formDetails.firstName}
                        onChange={handleChange}
                        ref={register({
                            required: true,
                            pattern: /^[a-zA-Z]*$/
                        })} />
                    {errors.email && errors.email.type === "required" && (
                        <p className={null}>First name is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className={null}>Letters only.</p>
                    )}
                </div>
                <div className={form__input__column}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text" name="lastName" id="lastName"
                        defaultValue={formDetails.lastName}
                        onChange={handleChange}
                        ref={register({
                            required: false,
                            pattern: /^[a-zA-Z]*$/
                        })} />
                    {errors.email && errors.email.type === "pattern" && (
                        <p className={null}>Letters only.</p>
                    )}
                </div>
                <div className={form__input__column}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" name="email" id="email"
                        defaultValue={formDetails.email}
                        onChange={handleChange}
                        ref={register({
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })} />
                    {errors.email && errors.email.type === "required" && (
                        <p className={null}>Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className={null}>Email is not valid.</p>
                    )}
                </div>
                <div className={form__input__column}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" name="password" id="password"
                        defaultValue={formDetails.password}
                        onChange={handleChange}
                        ref={register({ required: true, minLength: 8 })} />
                    {errors.password && errors.password.type === "required" && (
                        <p className={null}>Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className={null}>
                            Password should be at-least 6 characters.
                        </p>
                    )}
                </div>
                <div className={form__input__column}>
                    <label htmlFor="confirmPassword">Confirm</label>
                    <input
                        type="password" name="confirmPassword" id="confirmPassword"
                        defaultValue={formDetails.confirmPassword}
                        onChange={handleChange}
                        ref={register({ required: true, minLength: 8, match: 'password' })} />
                    {errors.password && errors.password.type === "required" && (
                        <p className={null}>Password confirmation is required.</p>
                    )}
                    {errors.password && errors.password.type === "match" && (
                        <p className={null}>
                            Password must match.
                        </p>
                    )}
                </div>
                <div className={form__input__column}>
                    <button
                        type="submit"
                        className={form__button_primary}
                    >Sign Up</button>
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
                <span role="link" onClick={() => toggleForm(!false)}>Sign In</span>
            </div>
        </div>
    )
}

export default SignUp;