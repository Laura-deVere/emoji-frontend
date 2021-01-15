import PropTypes from 'prop-types';

import { modal__close } from '../Modal/Modal.module.scss';

const CancelButton = ({ updateModalVisibility }) => (
    <button
        data-test="cancel-button"
        className={modal__close}
        onClick={() => { updateModalVisibility(false) }}
    >X</button>
);

CancelButton.propTypes = {
    updateModalVisibility: PropTypes.func.isRequired
}

export default CancelButton;