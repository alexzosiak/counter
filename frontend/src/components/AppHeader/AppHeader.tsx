import './app-header.scss';
import logo from '../../assets/counter.svg';
import AppNavigation from '../AppNavigation/AppNavigation';

const Header = () => {

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
            <AppNavigation/>
        </header>
    );
};

export default Header;
