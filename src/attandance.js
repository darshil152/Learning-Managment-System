import { ThreeGMobiledataSharp } from '@mui/icons-material'
import { listItemSecondaryActionClasses } from '@mui/material'
import React, { Component } from 'react'

export default class Attandance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            atta: localStorage.getItem("student") ? JSON.parse(localStorage.getItem('student')) : [],
            attandance: ' ',
            x: [],
            date: '',
            newdata: [],
            ab: '',
        }
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.attandance !== this.state.attandance) {
            console.log(prevState,"../././././.") 
        }
    }   

    onattanchange = (e, id) => {
        let x = {
            attandance: e.target.checked,
            date: e.target.value
        }

        this.setState({ attandance: e.target.checked })
        let newData = ''
        for (let i = 0; i < this.state.atta.length; i++) {
            if (this.state.atta[i].id == id) {
                newData = this.state.atta[i]
            }
        }

        // console.log(newData)
        newData['attandance'] = x
        // console.log(newData)

        for (let i = 0; i < this.state.atta.length; i++) {
            if (this.state.atta[i].id == id) {
            }
        }
    }

    ondatechange = (e) => {
        this.setState({ date: e.target.value })
    }

    

    click = (id) => {
        let z = {
            attandance: false,
            date: this.state.date
        }

        for (let i = 0; i < this.state.atta.length; i++) {
            if (!this.state.atta[i].attandance) {
                this.state.atta[i]['attandance'] = z
            }
            console.log(z)
            // console.log(this.state.atta[i].attandance)
        }



        console.log('state :: ', this.state.atta)
        localStorage.setItem('pree', JSON.stringify(this.state.atta))


        // let objIndex = this.state.atta.findIndex((obj => obj.id == id));
        
        // console.log('index :: ', objIndex)
        // this.state.atta[objIndex].attandance = z
        localStorage.setItem('student', JSON.stringify(this.state.atta))
    }



    present = (e, id) => {

    }

    render() {
        return (
            <div >
                <input type="date" id="attandance" name="attandance" onChange={this.ondatechange} />
                {
                    this.state.atta.map((items, i) => {
                        return (
                            <div>
                                <h5>{items.email}
                                    <input type="checkbox" onChange={(e) => this.onattanchange(e, items.id)} name={'gender' + i} value={this.state.date} id="pre" onClick={(id) => this.present(id)} />present
                                    <br></br> </h5>
                            </div>
                        )
                    })
                }
                <button button type="button" onClick={this.click} class="btn btn-primary click" > Save</button>

            </div>
        )
    }
}
            

// var z = JSON.parse(localStorage.getItem('student'))

// var res = {};
// z.forEach((v) => {
//     res[v.status] = (res[v.status] || 0) + 1;
// });


