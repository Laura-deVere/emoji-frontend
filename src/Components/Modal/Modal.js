import { useState } from 'react';

import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

import {
    modal,
    modal__hidden,
    modal__visible,
    modal__close,
    modal__background,
    modal__form_container
} from './Modal.module.scss';

const Modal = ({ isVisible, updateModalVisibility }) => {
    const [form, setForm] = useState(false);
    return (
        <div className={`${modal} ${isVisible ? modal__visible : modal__hidden}`}>
            <div className={modal__background}></div>
            <div className={modal__form_container}>
                <button
                    data-test="cancel-button"
                    className={modal__close}
                    onClick={() => { updateModalVisibility(false) }}
                >X</button>
                {!form ? <SignUp toggleForm={setForm} /> : <SignIn toggleForm={setForm} />}
            </div>
        </div>
    )
}

export default Modal;