import { form__signup } from './Signup.module.scss';
import { form__input__column, form__button_primary, form__logo__emoji } from '../../sass/Forms.module.scss';

const SignUp = ({ toggleForm }) => {
    return (
        <div className={form__signup}>
            <div className={form__logo__emoji}>
                <span>😁</span>
            </div>
            <form>
                <div className={form__input__column}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" name="firstName" />
                </div>
                <div className={form__input__column}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>
                <div className={form__input__column}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={form__input__column}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={form__input__column}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
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