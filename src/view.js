import React, { Component } from 'react'
import Layout from './layout'

export default class View extends Component {

    state = {
        url: '',
        currentdata: '',
    }

    componentDidMount() {
        let url = window.location.href
        var id = url.substring(url.lastIndexOf('/') + 1);
        // console.log(id)

        let olddata = JSON.parse(localStorage.getItem('student'));

        let currentdata = ''

        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i].id == id) {
                currentdata = olddata[i];
            }
        }
        this.setState({ currentdata })
        // console.log(currentdata)
    }
    render() {
        return (
            <Layout>
                <div className='main-section'>
                    <div class="container">
                        <div class="team-single">
                            <div class="row">
                                <div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
                                    <div class="team-single-img mt-5">
                                        <img src={this.state.currentdata.image} alt="" className='viewimage' />
                                    </div>

                                </div>

                                <div class="col-lg-8 col-md-7">
                                    <div class="team-single-text padding-50px-left sm-no-padding-left">

                                        <div class="contact-info-section margin-40px-tb">
                                            <ul class="list-style9 no-margin">
                                                <li>

                                                    <div class="row mt-5">
                                                        <div class="col-md-5 col-5 ">
                                                            <i class="fas fa-graduation-cap text-orange"></i>
                                                            <strong class="margin-10px-left  abc">First Name:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.fname}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="far fa-gem text-yellow"></i>
                                                            <strong class="margin-10px-left  abc">Last Name:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.lname}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="far fa-file text-lightred"></i>
                                                            <strong class="margin-10px-left  abc">Email:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.email}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-envelope text-pink abc"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left  abc">Gender:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.gender}</h1>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-map-marker-alt text-green"></i>
                                                            <strong class="margin-10px-left  abc">Country:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.country}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-mobile-alt text-purple "></i>
                                                            <strong class="margin-10px-left xs-margin-four-left  abc">City:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.city}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-envelope text-pink"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left  abc">State:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.state}</h1>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-envelope text-pink"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left  abc">DOB::</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.dob}</h1>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-envelope text-pink"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left  abc">Contact:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 className='firstname'>{this.state.currentdata.contact}</h1>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}