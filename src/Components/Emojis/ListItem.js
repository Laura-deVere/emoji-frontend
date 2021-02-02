import PropTypes from 'prop-types';

const ListItem = ({ emoji }) => {
    const { codePoint, unicodeName } = emoji;
    const code = `&#x${codePoint};`;

    return (
        <li data-test="emoji-list-item">
            <div data-test="emoji-container">
                <p data-test="emoji-name">{unicodeName}</p>
                <div data-test="emoji-code">{code}</div>
            </div>
        </li>
    )
}

ListItem.propTypes = {
    emoji: PropTypes.object.isRequired
}

export default ListItem;