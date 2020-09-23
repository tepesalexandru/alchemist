import React, { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Main from "./Main";

export default function Become(){
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
      <div className="antialiased bg-gray-200 text-gray-900">
        <Header navClass={nav}/>
        <Main />
        <Form />
      </div>
    );
  
}
