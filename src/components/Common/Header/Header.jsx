import React from 'react';
import logo from 'logo-full-new.svg';
import s from './Header.module.scss';
import Cart from 'components/Cart/Cart';

function Header() {
    return (
        <header className={s.header} data-testid="header-Root">
            <div className={s.logoContainer}>
                <img src={logo} alt="Beautycounter" className={s.logo} data-test-id="header-Logo" />
            </div>
            <div className={s.cartContainer}><Cart /></div>
        </header>
    )
}

export default Header;