import { Link } from "react-router-dom";
import './app-navigation.scss';


const AppNavigation = () => {
    
    return (
        <div className="header__wrapper-nav">
            <nav className="nav">
                <ul className="nav__list">
                      <li className="nav__item">
                        <Link className="nav__link" to='/'>home</Link>
                    </li>
                    <li className="nav__item">
                     
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
