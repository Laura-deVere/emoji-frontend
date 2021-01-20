import PropTypes from 'prop-types';
import Form from './Form';

import { form__signin } from './SignIn.module.scss';
import { form__logo__emoji } from '../../sass/Forms.module.scss';

const SignUp = ({ toggleForm }) => {

    const handlePostRequest = (data) => {
        console.log(data)
    }

    return (
        <div className={form__signin}>
            <div className={form__logo__emoji}>
                <span>🥳</span>
            </div>
            <Form handleFormSubmit={handlePostRequest} />
            <div>
                <span>Forgot to sign up?</span>
                <button
                    onClick={() => toggleForm(!true)}>Sign Up
                </button>
            </div>
        </div>
    )
}

SignUp.propTypes = {
    toggleForm: PropTypes.func.isRequired
}

export default SignUp;