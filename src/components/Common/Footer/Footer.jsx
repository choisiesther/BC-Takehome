import React from 'react';
import s from './Footer.module.scss';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className={s.footer} data-testid="footer-Root">
            <div>&copy; {`${year} COUNTER BRANDS, LLC. ALL RIGHTS RESERVED.`}</div>
        </footer>
    )
}

export default Footer;