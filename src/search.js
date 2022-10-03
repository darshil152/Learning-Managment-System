import ReactSearchBox from "react-search-box";
import React, { Component } from 'react'
import { WindowSharp } from "@mui/icons-material";

export default class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            data : JSON.parse(localStorage.getItem('student')),
        }
    }

    componentDidMount (){
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/')+1)
        this.setState({id})

        let olddata = localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) :[];
        let currentdata = '';

        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i].id == id) {
                currentdata = olddata[i];
                if (olddata[i].gender && olddata[i].gender != "") {
                    document.getElementById(olddata[i].gender).click();
                }
                this.setState({currentdata , dob:currentdata.dob})
            }  
              objIndex =y.findIndex((obj => obj.id == this.state.id));
              
              
              y[objIndex].fname = this.state.fname
              
              localStorage.setItem('student', JSON.stringify(y))
              window.location.href ='/form/'
        }
    }

    render() {
        return (
            <div>
            <ReactSearchBox
                onSelect={(record: data) => console.log(record)}
                onFocus={() => {
                    console.log("This function is called when is focussed");
                }}
                onChange={(value) => console.log(value)}
                autoFocus
                leftIcon={<>🎨</>}
                iconBoxSize="48px"
            />
            </div>
        );
    }
}

