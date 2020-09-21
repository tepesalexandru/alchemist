import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Services from './Services';
import Video from './Video';
import Inspired from './Inspired';

export default function index() {
    return (
        <div>
            <Header />
            <Searchbar />
            <Services />
            <Video />
            <Inspired />
        </div>
    )
}
