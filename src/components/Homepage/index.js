import React, { useEffect, useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Services from './Services';
import Video from './Video';
import Inspired from './Inspired';
export default function Homepage() {
    const [nav, setNav] = useState("w-full fixed top-0 left-0 z-10 bg-transparent transition-colors duration-20")
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 20) {
                setNav("w-full fixed top-0 left-0 z-10 bg-purple-900 transition-colors duration-20")
            } else {
                setNav("w-full fixed top-0 left-0 z-10 bg-transparent transition-colors duration-20")
            }
        })
    }, [])

    return (
        <div onScroll={() => {console.log("hello scrol")}}>
            <Header navClass={nav}/>
            <Searchbar />
            <Services />
            <Video />
            <Inspired />
            
        </div>
    )
}
