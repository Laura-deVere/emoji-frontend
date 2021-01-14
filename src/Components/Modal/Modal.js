import SignUp from '../SignUp';

import { modal, modal__hidden, modal__visible, modal__close } from './Modal.module.scss';

const Modal = ({ isVisible, updateModalVisibility }) => {
    return (
        <div className={`${modal} ${isVisible ? modal__visible : modal__hidden}`}>
            <button
                data-test="cancel-button"
                className={modal__close}
                onClick={() => { updateModalVisibility(false) }}
            >X</button>
            <SignUp />
        </div>
    )
}

export default Modal;