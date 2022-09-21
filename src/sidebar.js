import React, { Component } from 'react'
import "./sidebar.css"
import icon from './icon.png'
import student from './student.png'
import { click } from '@testing-library/user-event/dist/click'
import Form from './form'
import { Link } from 'react-router-dom'

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
                        <Link to={'/form'} >
                            <button className="btn">Add Students</button>
                        </Link>
                    </div>
                    <div className='col-12 abc'>
                        <img src={student} className="student" />
                        <Link to={'/table'} >
                            <button className="btn">View Table</button>
                        </Link>
                    </div>
                </div>
            </div >


        )
    }
}