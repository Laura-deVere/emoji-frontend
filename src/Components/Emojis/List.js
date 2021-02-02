import { render } from 'enzyme';
import PropTypes from 'prop-types';
import { emojis } from './emojis';
import ListItem from './ListItem';

const List = () => {

    const renderList = (emojis) => {
        return emojis.map((emoji, index) => {
            return <ListItem emoji={emoji} key={index} />
        });
    }
    return (
        <div>
            <ul>
                {renderList(emojis)}
            </ul>
        </div>
    )
}

export default List;