import React, { Component } from 'react'
import "./sidebar.css"
import icon from './icon.png'
import student from './student.png'

export default class Sidebar extends Component {
  render() {
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 btn-add'>
                    <div className='row'>
                        <div className='col-12 abc'>
                        <img src={icon} className="dashboard" />
                            <button className="btn">Dashboard</button> 
                        </div>
                        <div className='col-12 abc'>
                        <img src={student} className="student" />
                            <button className="btn">Add Students</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    )
  }
}
