import React, { Component } from 'react'
import { date } from 'yup'
import { Link } from "react-router-dom";

export default class Forgitpassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            // people: localStorage.getItem("student") ? JSON.parse(localStorage.getItem("student")) : [],
            temparray: [],
            // id: ''
        }
    }


    componentDidMount() {
        let array = localStorage.getItem("forgot") ? JSON.parse(localStorage.getItem("forgot")) : []
        if (array.lenght > 0) {
            this.setState({ temparray : array })
        }
        // console.log("afskfs")
    }


    onemailchange = (e) => {
        this.setState({ email: e.target.value })
    }

    click = (e, id) => {
        // e.preventDefault();

        let y = localStorage.getItem("forgot") ? JSON.parse(localStorage.getItem("forgot")) : []
        let ische = false

        if (y.lenght > 0) {
            ische = true

            if (ische) {
                let temparray = this.state.temparray
                temparray.push({
                    email: this.state.email,
                    id: Date.now()
                })
                this.setState({ temparray })
                localStorage.setItem('forgot', JSON.stringify(temparray))
                window.location.href = "/newpass/" + id
             
            }
        } else {
            let temparray = this.state.temparray
            temparray.push({
                email: this.state.email,
                id: Date.now()
            })
            this.setState({ temparray })
            localStorage.setItem('forgot', JSON.stringify(temparray))
            // localStorage.setItem('student', JSON.stringify(y))
            window.location.href = "/newpass/" + id
        }
        
    }
    render() {
        return (
            <div>
                <input type="email" name="email" onChange={this.onemailchange} value={this.state.email} />
                <button onClick={(id)=>this.click(id)}>Submit</button>
            </div>
        )
    }
}
