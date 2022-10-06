import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      x: [],
    }
  }
  onnamechange = (e) => {
    this.setState({ name: e.target.value })
  }

  componentDidMount(){
    
  }

  clicl2 = (e) => {
    let x = this.state.x
    x.push({
      name:this.state.name
    })
    this.setState({x})
    localStorage.setItem('test',JSON.stringify(x));
  }

  render() {
    return (
      <div>
        <input type="name" onChange={this.onnamechange} />
        <button type='submit' onClick={this.clicl2} >Submit</button>
      </div>
    )
  }
}
