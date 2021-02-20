import { emojis } from './emojis';
import ListItem from './ListItem';

import { list } from './EmojiList.module.scss';

const List = () => {

    const renderList = (emojis) => {
        return emojis.map((emoji, index) => {
            return <ListItem emoji={emoji} key={index} />
        });
    }
    return (
        <ul className={list}>
            {renderList(emojis)}
        </ul>
    )
}

export default List;