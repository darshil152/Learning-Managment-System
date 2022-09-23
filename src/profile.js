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
                <div class="card">
                    <img src={this.state.currentdata.image} />

                    <lable>Name</lable>
                    <h4 className='pro'>{this.state.currentdata.fname}</h4><br></br>

                    <lable>Last Name</lable>
                    <h4 className='pro'>{this.state.currentdata.lname}</h4><br></br>

                    <lable>Email</lable>
                    <h4 className='pro'>{this.state.currentdata.email}</h4><br></br>

                    <lable >Password</lable>
                    <h4 className='pro'>{this.state.currentdata.country}</h4><br></br>

                    <lable>City</lable>
                    <h4 className='pro'>{this.state.currentdata.city}</h4><br></br>

                    <lable>state</lable>
                    <h4 className='pro'>{this.state.currentdata.state}</h4><br></br>

                    <lable>City</lable>
                    <h4 className='pro'>{this.state.currentdata.country}</h4><br></br>


                </div>
            </div>
        )
    }
}
