import React, { Component } from 'react'

export default class Attandance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            atta: JSON.parse(localStorage.getItem('student')),
            attandance: ' ',
            temparray: [],
            // uid: '',
            date: '',
        }
    }
    onattanchange = (e) => {
        this.setState({ attandance: e.target.value })
    }
    ondatechange = (e) => {
        this.setState({ date: e.target.value })
    }

    click = (e) => {
        let temparray = this.state.temparray
        temparray.push({
            attandance: this.state.attandance,
            date: this.state.date,
            // udi: Date.now()
        })
        this.setState({ temparray })
        localStorage.setItem('attandace', JSON.stringify(temparray))
    }


    present = (e) => {

    }
    absent = (e) => {

    }

    render() {
        return (
            <div >
                {this.state.atta.map((items, i) => {
                    return (
                        <div onChange={this.onattanchange}>
                            <h5>{items.email}
                                <input type="radio" name={'gender' + i} value="pre" id="pre" onClick={this.present} />present
                                <br></br><input type="radio" name={'gender' + i} value="abs" id="abs" onClick={this.absent} />Absent</h5>
                        </div>

                    )

                })}
                <input type="date" id="attandance" name="attandance" onChange={this.ondatechange} />
                <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
            </div>


        )
    }
}
