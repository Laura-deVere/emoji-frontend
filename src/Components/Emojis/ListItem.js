import PropTypes from 'prop-types';

const ListItem = ({ emoji }) => {
    const { codePoint, unicodeName } = emoji;

    const testString = (code) => {
        code = code.split(' ');
        const pattern = new RegExp(/^([a-zA-Z0-9 _-]+)$/);
        const matches = pattern.test(code[0]);
        if (matches) {
            return { __html: `<span>&#x${code[0]};<span/>` };
        } else {
            return { __html: `<span>:(</span>` };
        }
    }

    return (
        <li data-test="emoji-list-item">
            <div className="tooltip" data-test="emoji-container">
                <button data-test="emoji-code" dangerouslySetInnerHTML={testString(codePoint)}>
                </button>
                <span className="tooltiptext" data-test="emoji-name">{unicodeName}</span>
            </div>
        </li>
    )
}

ListItem.propTypes = {
    emoji: PropTypes.object.isRequired
}

export default ListItem;