import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddEmojiButton from './AddEmojiButton';
import Header from './Header';
import EmojisList from '../Emojis/List';

const CurrentUser = ({ user }) => {
    const { fname, lname } = user;
    return (
        <div>
            <Header firstName={fname} lastName={lname} />
            <AddEmojiButton />
            <EmojisList />
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