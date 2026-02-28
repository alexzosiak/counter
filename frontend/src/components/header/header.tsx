import './header.scss';
import logo from '../../assets/counter.svg';

const Header = ({chengHistory, historyOn}) => {
    return (
        <header className="header">
            <div className="header__wrapper-title">
                <img src={logo} alt="logo" className="header__logo" />
                <h1 className="header__title">
                    Server counter on <span>Express</span> and React
                </h1>
                <h2 className="header__subtitle">
                    It is first project, when I use server
                </h2>
            </div>

            <div className="header__wrapper-nav">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link"  onClick={() => chengHistory()}>{!historyOn ? 'open history' : 'closet history'}</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="">about</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
