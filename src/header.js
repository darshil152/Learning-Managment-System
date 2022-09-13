import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';
import profile from './male.png'
import "./header.css"


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav class="navbar navbar-light  justify-content-between">
                    <img src={logo} className="logo" alt="My logo" />
                    <div className='profile'>
                        <img src={profile} className="logo" alt="My logo" />
                        <h4 className='dummy'>John deo</h4>
                    </div>
                </nav>
            </div>
        )
    }
}
