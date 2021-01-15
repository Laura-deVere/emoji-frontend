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
                    <label>First Name</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <label>Last Name</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <label>Email</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <label>Password</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <label>Password Confirmation</label>
                    <input />
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
                <span onClick={() => toggleForm(!false)}>Sign In</span>
            </div>
        </div>
    )
}

export default SignUp;