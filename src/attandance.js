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
        this.setState =({ date: e.target.value })
    }

    click = (e,id) => {

         this.state = (e.target.checked)
         console.log(e)

        // let temparray = this.state.temparray
        // temparray.push({
        //     attandance: this.state.attandance,
        //     date: this.state.date,
        //     // udi: Date.now()
        }

        // this.setState({ temparray }).
        // localStorage.setItem('attandace', JSON.stringify(temparray))
    
    present = (e) => {       
    }

    absent = (e) => {
    }

    render() {
        return (
            <div>
            <input type="date" id="attandance" name="attandance" onChange={this.ondatechange} />
                {this.state.atta.map((items, i) => {
                    return (
                        <div onChange={this.onattanchange}>
                            <h5>{items.email}
                                <input type="checkbox" name={'gender' + i} value="pre" id="pre" onClick={(id)=>this.present(items.id)} />present
                                <br></br></h5>
                        </div>
                    )
                })}
                <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
            </div>
        )
    }
}