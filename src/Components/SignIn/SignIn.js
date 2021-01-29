import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

import Form from './Form';

import { form__signin } from './SignIn.module.scss';
import { form__logo__emoji } from '../../sass/Forms.module.scss';

const SignIn = ({ toggleForm, signIn }) => {

    const handlePostRequest = (user) => {
        signIn(user);
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

SignIn.propTypes = {
    toggleForm: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired
}

export default connect(null, { signIn })(SignIn);