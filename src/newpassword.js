import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { WindowOutlined, WindowSharp } from '@mui/icons-material';


export default class Newpassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            password: '',
            confirmpassword: '',
        }
    }

    componentDidMount(){
        let url = window.location.href;
    }

    password = (e) =>{
       this.setState({password : e.target.value})
    }

    comfimpassword = (e) =>{
        this.setState({confirmpassword : e.target.value})
    }
    render() {
        return (
            <div>

                <Formik
                    initialValues={{
                        password: "",
                        confirmpassword: ""
                    }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string().required("This field is required"),
                        confirmpassword: Yup.string().when("password", {
                            is: val => (val && val.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Both password need to be the same"
                            )
                        })
                    })}

                    onSubmit={() => { }}
                >

                    {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <label for="passowrd">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                <span class="error" style={{ color: "red" }}>
                                    {errors.password}
                                </span>

                                <label for="passowrd">Confirm Password</label>
                                <input
                                    type="password"
                                    name="changepassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.changepassword}
                                />
                                <span class="error" style={{ color: "red" }}>
                                    {errors.changepassword}
                                </span>
                            </form>
                        );
                    }}
                </Formik>



            </div>
        )
    }
}
