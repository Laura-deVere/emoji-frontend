import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddEmojiButton from './AddEmojiButton';
import Header from './Header';

const CurrentUser = ({ user }) => {
    const { fname, lname } = user;
    return (
        <div>
            <Header firstName={fname} lastName={lname} />
            <AddEmojiButton />
        </div>
    )
}

CurrentUser.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { user: state.auth.user }
}

export default connect(mapStateToProps)(CurrentUser);