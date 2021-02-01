import PropTypes from 'prop-types';

import { header } from './CurrentUser.module.scss'

const Header = ({ firstName, lastName }) => (
    <div className={header}>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcnaca.ca%2Fwp-content%2Fuploads%2F2018%2F10%2Fuser-icon-image-placeholder.jpg&f=1&nofb=1" data-test="header-image" />
        <h1 data-test="header-username">{firstName} {lastName}</h1>
    </div>
)

Header.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
}

export default Header;