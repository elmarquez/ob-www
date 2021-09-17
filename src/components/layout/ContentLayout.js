import React from 'react';
import Footer from '../footer';
import SiteHeader from '../header/SiteHeader';

function ContentLayout(props) {
    return (
        <div className="">
            <SiteHeader />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default ContentLayout;
