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
    }
    render() {
        return (
            <Layout>
                <div className='main-section'>
                    <div class="container">
                        <div class="team-single">
                            <div class="row">
                                <div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
                                    <div class="team-single-img">
                                        <img src={this.state.currentdata.image} alt="" className='viewimage' />
                                    </div>

                                </div>

                                <div class="col-lg-8 col-md-7">
                                    <div class="team-single-text padding-50px-left sm-no-padding-left">

                                        <div class="contact-info-section margin-40px-tb">
                                            <ul class="list-style9 no-margin">
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-graduation-cap text-orange"></i>
                                                            <strong class="margin-10px-left text-orange">Degree:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <h1 >{this.state.currentdata.fname}</h1>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="far fa-gem text-yellow"></i>
                                                            <strong class="margin-10px-left text-yellow">Exp.:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <p>4 Year in Education</p>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="far fa-file text-lightred"></i>
                                                            <strong class="margin-10px-left text-lightred">Courses:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <p>Design Category</p>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-map-marker-alt text-green"></i>
                                                            <strong class="margin-10px-left text-green">Address:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <p>Regina ST, London, SK.</p>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>

                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-mobile-alt text-purple"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <p>(+44) 123 456 789</p>
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div class="row">
                                                        <div class="col-md-5 col-5">
                                                            <i class="fas fa-envelope text-pink"></i>
                                                            <strong class="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                                                        </div>
                                                        <div class="col-md-7 col-7">
                                                            <p><a href="javascript:void(0)">addyour@emailhere</a></p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h5 class="font-size24 sm-font-size22 xs-font-size20">Professional Skills</h5>

                                        <div class="sm-no-margin">
                                            <div class="progress-text">
                                                <div class="row">
                                                    <div class="col-7">Positive Behaviors</div>
                                                    <div class="col-5 text-right">40%</div>
                                                </div>
                                            </div>
                                            <div class="custom-progress progress">
                                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }} class="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                                            </div>
                                            <div class="progress-text">
                                                <div class="row">
                                                    <div class="col-7">Teamworking Abilities</div>
                                                    <div class="col-5 text-right">50%</div>
                                                </div>
                                            </div>
                                            <div class="custom-progress progress">
                                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }} class="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                                            </div>
                                            <div class="progress-text">
                                                <div class="row">
                                                    <div class="col-7">Time Management </div>
                                                    <div class="col-5 text-right">60%</div>
                                                </div>
                                            </div>
                                            <div class="custom-progress progress">
                                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }} class="animated custom-bar progress-bar slideInLeft bg-green"></div>
                                            </div>
                                            <div class="progress-text">
                                                <div class="row">
                                                    <div class="col-7">Excellent Communication</div>
                                                    <div class="col-5 text-right">80%</div>
                                                </div>
                                            </div>
                                            <div class="custom-progress progress">
                                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="animated custom-bar progress-bar slideInLeft bg-yellow"></div>
                                            </div>
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
