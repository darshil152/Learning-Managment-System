import React, { Component } from 'react'
import './profile.css'

export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentdata: '',
            people: JSON.parse(localStorage.getItem('loggedin')),
            people2: JSON.parse(localStorage.getItem('student'))
        }

    }
    componentDidMount() {
        for (let i = 0; i < this.state.people2.length; i++) {
            if (this.state.people.email == this.state.people2[i].email) {
                let currentdata = this.state.people2[i]
                // console.log('data :: ', currentdata)
                this.setState({ currentdata })
            }
        }
    }

    render() {
        return (
            <div>
                <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-6 mb-4 mb-lg-0">
                                <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                            <img src={this.state.currentdata.image} alt="Avatar" className="img-fluid my-5" style={{ width: '150px' }} />
                                            <h5>{this.state.currentdata.fname}</h5>
                                            <h5>{this.state.currentdata.lname}</h5>
                                            <i className="far fa-edit mb-5" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-4">
                                                <h3>Information</h3>
                                                <hr className="mt-0 mb-4" />
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">Email</p>
                                                        <h6>{this.state.currentdata.email}</h6>

                                                    </div>

                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">Password</p>
                                                        <h6>{this.state.currentdata.password}</h6>
                                                    </div>


                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">Gender</p>
                                                        <h6>{this.state.currentdata.gender}</h6>
                                                    </div>


                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">Contact</p>
                                                        <h6>{this.state.currentdata.contact}</h6>

                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">country</p>
                                                        <h6>{this.state.currentdata.country}</h6>
                                                    </div>

                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">State</p>
                                                        <h6>{this.state.currentdata.state}</h6>
                                                    </div>

                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">City</p>
                                                        <h6>{this.state.currentdata.city}</h6>
                                                    </div>

                                                    <div className="col-6 mb-3">
                                                        <p className="text-muted">DOB</p>
                                                        <h6>{this.state.currentdata.dob}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
