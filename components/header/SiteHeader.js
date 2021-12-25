import React from 'react';
import NavBar from './NavBar';
import SiteHero from './SiteHero';

function SiteHeader(props) {
    return (
        <header>
            <NavBar />
            <SiteHero />
        </header>
    );
}

export default SiteHeader;
