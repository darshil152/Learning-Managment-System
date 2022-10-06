
import { LinkedCamera, TurnRightSharp } from '@mui/icons-material'
import React, { Component } from 'react'

export default class Attandance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            atta: localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [],
            attandance: ' ',
            x: [],
            newdata: [],
            date: '',
        }                                   
    }


    onattanchange = (e, id) => {

        let x = {
            attandance: e.target.checked,
            date: e.target.value
        }
        this.setState({ attandance : e.target.checked })

        let newData = ''
        for (let i = 0; i < this.state.atta.length; i++) {
            if (this.state.atta[i].id == id) {
                newData = this.state.atta[i]
            }
        }
        // console.log(newData)
        newData['attandance'] = x
        console.log(newData)

        for (let i = 0; i < this.state.atta.length; i++) {
            if (this.state.atta[i].id == id) {
            }
        }
    }

    ondatechange = (e) => {
        this.setState({ date: e.target.value})
    }

    click = (id) => {

        let z = {
            attandance: false,
            date: this.state.date
        }

        for (let i = 0; i < this.state.atta.length; i++) {
            if (this.state.atta[i]['attandance']) {
            }
        }
        // console.log(this.state.atta)
    }

    // present = (e, id) => {
    // }

    render() {
        return (
            <div>
                <input type="date" id="attandance" name="attandance" onChange={this.ondatechange} />
                {
                    this.state.atta.map((items, i) => {
                        return (
                            <div >
                                <h5>{items.email}
                                    <input type="checkbox" onChange={(e)=>this.onattanchange(e,items.id)} name={'gender' + i} value={this.state.date} id="pre"  />present
                                    <br></br></h5>
                            </div>
                        )
                    })}
                    
                <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
            </div>
        )
    }

}
