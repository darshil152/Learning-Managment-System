import React, { Component } from 'react'
import "./sidebar.css"
import icon from './icon.png'
import student from './student.png'
import { click } from '@testing-library/user-event/dist/click'
import Form from './form'

export default class Sidebar extends Component {
    click = (e) => {
        window.location.href = "/form"
    }
    click1 = (e) => {
        window.location.href = "/table"
    }
    render() {
        return (


            <div className='sidebar' >
                <div className='row'>
                    <div className='col-12 abc xyzq'>
                        <img src={icon} className="dashboard" />
                        <button className="btn">Dashboard</button>
                    </div>
                    <div className='col-12 abc'>
                        <img src={student} className="student" />
                        <button className="btn" onClick={this.click}>Add Students</button>
                    </div>
                    <div className='col-12 abc'>
                        <img src={student} className="student" />
                        <button className="btn" onClick={this.click1}>View Table</button>
                    </div>
                </div>
            </div>


        )
    }
}