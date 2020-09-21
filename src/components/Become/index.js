import React, { Component } from "react";
import Header from './Header';
import Form from "./Form";
import Main from "./Main";

export default class index extends Component {
  render() {
    return (
      <div className="antialiased bg-gray-200 text-gray-900">
        <Header />
          <Main />
          <Form />
      </div>
    );
  }
}
