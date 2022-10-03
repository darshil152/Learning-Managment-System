// import { LinkedCamera } from '@mui/icons-material'
// import React, { Component } from 'react'

// export default class Attandance extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             atta: localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')):[],
//             attandance: ' ',
//             x: [],
//             newdata: [],
//             date: '',
//         }
//     }

    
// //     onattanchange = (e, id) => {
// //         let x = {
// //             attandance: e.target.checked,
// //             data: e.target.value
// //         }
// //         this.setState({ attandance: e.target.value })
// //         let newData = '',

// //         for (let i = 0; i < this.state.atta.length; i++) {
// //             if (this.state.atta[i].id == id) {
// //                 newData = this.state.atta[i]
// //             }
// //         }
// //         newData['attandance'] = x;
// //         for (let i = 0; i < newData.length.length; i++)
// //             if (newData[i].id == this.state.atta.id) {
// //                 alert('afjafjk');
// //             }
// //     }
// // }   


// ondatechange = (e) => {
//     this.setState = ({ date: e.target.value })
// }

// click = (id) => {
//     let x = this.state.x
//     x.push({
//         attandance: this.state.attandance,
//         date: this.state.date,
//     })
//     this.setState({ x })
//     localStorage.setItem('attandance', JSON.stringify(x))


//     objIndex = myArray.findIndex((obj => obj.id == 1));
//     myArray[objIndex].name = "Laila"
//     console.log(e)
// }


// present = (e,id) => {
// }


// render(){
//     return (
//         <div>
//             <input type="date" id="attandance" name="attandance" onChange={this.ondatechange} />
//             {
//                 this.state.atta.map((items, i) => {
//                 return (
//                     <div onChange={this.onattanchange}>
//                         <h5>{items.email}
//                             <input type="checkbox" name={'gender' + i} value="pre" id="pre" onClick={(id) => this.present(items.id)} />present
//                             <br></br></h5>
//                     </div>
//                 )
//             })}
//             <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
//         </div>
//     )
// }

