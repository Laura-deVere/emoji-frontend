import { useState } from 'react';
import PropTypes from 'prop-types';

import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import CancelButton from '../Buttons/CancelButton';

import {
    modal,
    modal__hidden,
    modal__visible,
    modal__background,
    modal__form_container
} from './Modal.module.scss';

const Modal = ({ isVisible, updateModalVisibility }) => {
    const [form, setForm] = useState(false);
    return (
        <div className={`${modal} ${isVisible ? modal__visible : modal__hidden}`}>
            <div className={modal__background}></div>
            <div className={modal__form_container}>
                <CancelButton updateModalVisibility={updateModalVisibility} />
                {!form ? <SignUp toggleForm={setForm} /> : <SignIn toggleForm={setForm} />}
            </div>
        </div>
    )
}

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    updateModalVisibility: PropTypes.func.isRequired
}

export default Modal;