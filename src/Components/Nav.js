import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Nav = () => {
    const history = useHistory();

    return (
        <nav>
            <button onClick={() => history.push("/")}>home</button>
        </nav>
    )
}

export default Nav;