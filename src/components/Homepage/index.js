import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Services from './Services';
import Video from './Video';
import Inspired from './Inspired';
import Footer from './Footer';
import Modals from './Modals/index';

export default function index() {
    return (
        <div>
            <Header />
            <Searchbar />
            <Services />
            <Video />
            <Inspired />
            <Footer />
            <Modals />
        </div>
    )
}
