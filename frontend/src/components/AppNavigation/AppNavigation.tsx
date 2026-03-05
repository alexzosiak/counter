import useCounter from "../hooks/useCounter";
import './app-navigation.scss';

const AppNavigation = () => {
    const { history, toggleHistory } = useCounter();
    
    return (
        <div className="header__wrapper-nav">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a
                            className="nav__link"
                            onClick={() => toggleHistory()}
                        >
                            {history ? 'close history' : 'open history'}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="">
                            about
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AppNavigation;
