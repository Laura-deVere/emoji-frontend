import SignUp from '../SignUp/SignUp';

import {
    modal,
    modal__hidden,
    modal__visible,
    modal__close,
    modal__background,
    modal__form_container
} from './Modal.module.scss';

const Modal = ({ isVisible, updateModalVisibility }) => {
    return (
        <div className={`${modal} ${isVisible ? modal__visible : modal__hidden}`}>
            <div className={modal__background}></div>
            <div className={modal__form_container}>
                <button
                    data-test="cancel-button"
                    className={modal__close}
                    onClick={() => { updateModalVisibility(false) }}
                >X</button>
                <SignUp />
            </div>
        </div>
    )
}

export default Modal;