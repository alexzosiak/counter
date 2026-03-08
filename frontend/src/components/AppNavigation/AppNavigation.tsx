import useView from "../hooks/useView";
import { Link } from "react-router-dom";
import './app-navigation.scss';

const AppNavigation = () => {
    const {showHistory, toggleHistory } = useView();
    
    return (
        <div className="header__wrapper-nav">
            <nav className="nav">
                <ul className="nav__list">
                      <li className="nav__item">
                        <Link className="nav__link" to='/'>home</Link>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" onClick={() => toggleHistory()}>
                            {showHistory ? 'close history' : 'open history'}
                        </a>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to='/about'>about</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AppNavigation;
