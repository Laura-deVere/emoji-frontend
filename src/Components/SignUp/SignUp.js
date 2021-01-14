import { form__signup, form__signup__emoji } from './Signup.module.scss';
import { form__input__column, form__button_primary } from '../../sass/Forms.module.scss';

const SignUp = () => {
    return (
        <div className={form__signup}>
            <div className={form__signup__emoji}>
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
                    <button type="submit" className={form__button_primary} >Sign Up</button>
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
                <a href="#">Sign In</a>
            </div>
        </div>
    )
}

export default SignUp;