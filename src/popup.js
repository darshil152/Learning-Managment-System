import React, { Component } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";
import { render } from "@testing-library/react";
import { version } from 'react';


// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Notify = () =>{
    toast(' correct credential!', {
        position: "top-center",
        autoClose: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

const Notify2 = () =>{
    toast(' invalid credential ', {
        position: "bottom-center",
        autoClose: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

export default class popup extends Component {
  render() {
    return (
        <div>
        <button onClick={() => {Notify(); Notify2();}}>Click</button>
        <ToastContainer />
      </div>
    )
  }
}


