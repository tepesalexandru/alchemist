import React from "react";
import Homepage from "./components/Homepage/index";
import Become from "./components/Become/index";
import Login from "./components/Login/index";
import SignUp from "./components/SignUp/index";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Modals from "./components/Homepage/Modals";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
<<<<<<< HEAD
=======
        
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
          <Route path="/">
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/become" component={Become} />
          </Route>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Modals />
        </div>
      </BrowserRouter>
<<<<<<< HEAD

=======
      
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
      <Footer />
    </div>
  );
}
