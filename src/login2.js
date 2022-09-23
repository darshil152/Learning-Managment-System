import React, { Component } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { Fort } from '@mui/icons-material';


export default class Login2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            changepassword: '',
            color: '',
            gender: '',
            temparray: [],
        }
    }

    componentDidMount() {
        let array = JSON.parse(localStorage.getItem('login2'))
        if (array && array.length > 0) {
            this.setState({ temparray: array })
        }
    }

    onenamechange = (e) => {
        this.setState({ name: e.target.value })
    }
    oneemailchange = (e) => {
        this.setState({ email: e.target.value })
    }
    onepasswordchange = (e) => {
        this.setState({ password: e.target.value })
    }
    onecpasswordchange = (e) => {
        this.setState({ changepassword: e.target.value })
    }
    onecolorchange = (e) => {
        this.setState({ color: e.target.value })
    }
    onegenderchange = (e) => {
        this.setState({ gender: e.target.value })
    }


    login2 = (data) => {

        let y = localStorage.getItem("login2") ? JSON.parse(localStorage.getItem('login2')) : []
        let ische = false

        if (y.length > 0) {
            ische = true

            if (ische) {
                let temparray = this.state.temparray
                temparray.push(data)
                this.setState({ temparray })
                localStorage.setItem('login2', JSON.stringify(temparray))
                console.log(temparray)
            }
        } else {
            let temparray = this.state.temparray
            temparray.push(data)
            console.log('temparray :: ', temparray)
            this.setState({ temparray })
            localStorage.setItem('login2', JSON.stringify(temparray))
            console.log(temparray)
        }
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        changepassword: '',
                        color: '',
                        gender: '',
                    }}
                    onSubmit={(values) => {
                        this.login2(values)
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string().required("This field is required"),
                        changepassword: Yup.string().when("password", {
                            is: val => (val && val.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Both password need to be the same"

                            )

                        }),
                        color: Yup.string().required("Color is required!"),
                        gender: Yup.string().required("gender is required!"),
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email" style={{ display: "block" }}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}


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


                                <label htmlFor="email" style={{ display: "block" }}>
                                    Color
                                </label>
                                <select
                                    name="color"
                                    value={values.color}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ display: "block" }}
                                >
                                    <option value="" label="Select a color">
                                        Select a color{" "}
                                    </option>
                                    <option value="red" label="red">
                                        {" "}
                                        red
                                    </option>
                                    <option value="blue" label="blue">
                                        blue
                                    </option>

                                    <option value="green" label="green">
                                        green
                                    </option>
                                </select>


                                <label htmlFor="email" style={{ display: "block" }}>
                                    Gender
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={values.gender === "Male"}
                                        onChange={() => setFieldValue("gender", "Male")}
                                    />Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={values.gender === "Female"}
                                        onChange={() => setFieldValue("gender", "Female")}
                                    />Female
                                </label>

                                {errors.gender && <div className="input-feedback">{errors.gender}</div>}

                                <button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </button>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>

                            </form>
                        );
                    }}
                </Formik>
            </div>
        )
    }
}
