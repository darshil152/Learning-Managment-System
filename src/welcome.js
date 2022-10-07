import { Man, MyLocation } from '@mui/icons-material';
import React, { Component } from 'react'

export default class Welcome extends Component {
    
    render() {
        return (
            <div>
                <div class="container">
                    <div class="container__item landing-page-container">
                        <div class="content__wrapper">

                            <p class="coords">N 49° 16' 35.173"  /  W 0° 42' 11.30"</p>
                            <div class="ellipses-container">
                                <h2 class="greeting">Welome</h2>
                                <div class="ellipses ellipses__outer--thin">
                                    <div class="ellipses ellipses__orbit"></div>
                                </div>
                                <div class="ellipses ellipses__outer--thick"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




// let myArray = [
//     {id: 0, name: "Jhon"},
//     {id: 1, name: "Sara"},
//     {id: 2, name: "Domnic"},
//     {id: 3, name: "Bravo"}
//   ],
      
//   objIndex = myArray.findIndex((obj => obj.id == 1));
  
//   console.log("Before update: ", myArray[objIndex])
  
//   myArray[objIndex].name = "Laila"
  
//   console.log("After update: ", myArray[objIndex])


//   let attay1 = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [];

//   objIndex = attay1.findIndex((obj => obj.id == 1 ))
//   console.log('before update :' ,attay1[objindex] )
//   attay1[onjindex].fname =  this.state.fname
//   attay1[onjindex].lname = this.state.lname
//   attay1[onjindex].mname =  this.state.mname
//   attay1[onjindex].email = this.state.email
//   attay1[onjindex].dob =  this.state.dob
//   attay1[onjindex].city = this.state.cityca
//   attay1[onjindex].state = this.state.state
//   attay1[onjindex].country = this.state.country
  
//   console.log("After update:" , myArray[objIndex])

//   let y= localStorage.getItem('updated locastorafe' ,JSON.stringify(attay1[onjindex]))
//   console.log('Done !')
  

  