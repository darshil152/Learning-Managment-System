import React, { Component } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";
import { render } from "@testing-library/react";
import { version } from 'react';


// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Notify = () => {
  toast(' correct credential!', {
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const Notify1 = () => {
  toast(' wrong credential', {
    position: 'top-left',
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

const Notify2 = () => {
  toast(' invalid credential ', {
    position: "bottom-center",
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const Notify3 = () => {
  toast('please try again', {
    position: "top-right",
    autoClose: 9000,
    hideProgressBar: false,
    pauseOnHover: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
}


export default class popup extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { Notify(); Notify2(); Notify1(); Notify3(); }}>Click</button>
        <ToastContainer />
      </div>
    )
  }
}


