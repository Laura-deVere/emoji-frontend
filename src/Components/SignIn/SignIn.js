import { form__signin } from './SignIn.module.scss';
import { form__input__column, form__button_primary, form__logo__emoji } from '../../sass/Forms.module.scss';

const SignUp = ({ toggleForm }) => {
    return (
        <div className={form__signin}>
            <div className={form__logo__emoji}>
                <span>🥳</span>
            </div>
            <form>
                <div className={form__input__column}>
                    <label>Email</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <label>Password</label>
                    <input />
                </div>
                <div className={form__input__column}>
                    <button
                        type="submit"
                        className={form__button_primary}>Sign In</button>
                </div>
            </form>
            <div>
                <span>Forgot to sign up?</span>
                <span onClick={() => toggleForm(!true)}>Sign Up</span>
            </div>
        </div>
    )
}

export default SignUp;