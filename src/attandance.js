import React, { Component } from 'react'

export default class Attandance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            atta: JSON.parse(localStorage.getItem('student'))
        }
    }

    render() {
        return (
            <div>

                {this.state.atta.map((items, i) => {
                    return (
                        <h5>{items.fname}

                            <input type="radio" name={'gender' + i} value="male" id="male" />present
                            <br></br><input type="radio" name={'gender' + i} value="Female" id="Female" />Absent</h5>
                    )
                })}
            </div>


        )
    }
}
