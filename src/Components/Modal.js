import SignUp from './SignUp';

const Modal = () => {
    return (
        <div>
            <button data-test="cancel-button">X</button>
            <SignUp />
        </div>
    )
}

export default Modal;