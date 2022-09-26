import React, { Component } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { Fort } from '@mui/icons-material';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      people: JSON.parse(localStorage.getItem('student')),
      temparray: [],
    }
  }


  componentDidMount() {
    let array = JSON.parse(localStorage.getItem('login'))
    this.setState({ temparray: array })
  }

  onemailchange = (e) => {
    this.setState({ email: e.target.value })
  }
  onepasswordchange = (e) => {
    this.setState({ password: e.target.value })
  }

  oneimagechange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      //  console.log('RESULT', reader.result)
      this.setState({ image: reader.result })
    }
    reader.readAsDataURL(file);
  }


  loginhadle = (data) => {

    let isemail = false;
    for (let i = 0; i < this.state.people.length; i++) {
      if (data.email == this.state.people[i].email && data.password == this.state.people[i].password) {
        isemail = true
      }
    }
    if (isemail) {
      window.location.href = '/profile'
      localStorage.setItem('loggedin', JSON.stringify(data))
    } else {
      alert('Please Enter valid credential');
      window.location.href = './login'
    }
  }



  render() {
    return (
      <div class="login-form">
        <div class="form">
          <Formik
            initialValues={{
              email: "",
              password: '',
              image: '',
              color: '',
            }}
            
            onSubmit={(values) => {
              this.loginhadle(values)
              console.log('values :: ', values)
            }}

            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Required"),
              password: Yup.string().required('Please Enter your password')
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
                handleSubmit,
                handleReset,
                setFieldValue,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" style={{ display: "block" }}>
                    Login
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
                    <div className="text-danger input-feedback">{errors.email}</div>
                  )}


                  {/* <input id="file" name="file" type="file" onChange={(event) => {

                  var file = event.currentTarget.files[0];
                  var reader = new FileReader();
                  reader.onloadend = () => {
                    //  console.log('RESULT', reader.result)
                    setFieldValue("image", reader.result);
                  }
                  reader.readAsDataURL(file);

                }} /> */}

                  <input
                    id="password"
                    placeholder="Enter your password"
                    type="text"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />

                  {errors.password && touched.password && (
                    <div className="text-danger input-feedback">{errors.password}</div>
                  )}


                  {/* <label htmlFor="email" style={{ display: "block" }}>
                  Color
                </label>
                <select
                  id="color"
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
        >
                  <option value="green" label="green">
                    green
                  </option>
                </select>
                {errors.color && <div className="input-feedback">{errors.color}</div>} */}

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
      </div>

    )
  }
}
