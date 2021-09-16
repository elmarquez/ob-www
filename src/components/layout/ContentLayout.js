import React from 'react';
import Footer from '../footer';
import Header from '../header';

function ContentLayout(props) {
    return (
        <div className="relative overflow-hidden">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default ContentLayout;
