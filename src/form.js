import React, { Component } from 'react'
import Layout from './layout';
import "./form.css"
import profile from './male.png'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { OutlinedFlag, Password } from '@mui/icons-material';


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: profile,
            fname: '',
            mname: '',
            lname: '',
            gender: '',
            dob: '',
            email: '',
            contact: '',
            econtact: '',
            ffname: '',
            fmname: '',
            moname: '',
            fflname: '',
            foccupation: '',
            molname: '',
            fqualification: '',
            fcontact: '',
            mqualification: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            y: [],
            id: '',
            currentdata: '',
            Password: '',
        }
    }

    componentDidMount() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        // console.log(id)
        this.setState({ id })
        let olddata = localStorage.getItem("student") ? JSON.parse(localStorage.getItem('student')) : []
        let currentdata = ''
        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i].id == id) {
                currentdata = olddata[i];
                if (olddata[i].gender && olddata[i].gender !== '') {
                    document.getElementById(olddata[i].gender).click();
                }
                this.setState({ currentdata, dob: currentdata.dob, password: currentdata.password, fname: currentdata.fname, lname: currentdata.lname, gender: currentdata.gender, email: currentdata.email })
            }
        }
    }



    onimagechange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            //  console.log('RESULT', reader.result)
            this.setState({ image: reader.result })
        }
        reader.readAsDataURL(file);
    }


    onfnamechange = (e) => {
        this.setState({ fname: e.target.value })
    }
    onpasswordchange = (e) => {
        this.setState({ password: e.target.value })
    }
    onmnamechange = (e) => {
        this.setState({ mname: e.target.value })
    }
    onlnamechange = (e) => {
        this.setState({ lname: e.target.value })
    }
    ongenderchange = (e) => {
        this.setState({ gender: e.target.value })
    }
    ondobchange = (e) => {
        this.setState({ dob: e.target.value })
    }
    onemailchange = (e) => {
        this.setState({ email: e.target.value })
    }
    oncontactchange = (e) => {
        this.setState({ contact: e.target.value })
    }
    onecontactchange = (e) => {
        this.setState({ econtact: e.target.value })
    }

    // parent detail //
    onffnamechange = (e) => {
        this.setState({ ffname: e.target.value })
    }
    onfmnamechange = (e) => {
        this.setState({ fmname: e.target.value })
    }
    onmonamechange = (e) => {
        this.setState({ moname: e.target.value })
    }
    onfflnamechange = (e) => {
        this.setState({ fflname: e.target.value })
    }
    onfoccupationchange = (e) => {
        this.setState({ foccupation: e.target.value })
    }
    onmolnamechange = (e) => {
        this.setState({ molname: e.target.value })
    }
    onfqualificationchange = (e) => {
        this.setState({ fqualification: e.target.value })
    }
    onfcontactchange = (e) => {
        this.setState({ fcontact: e.target.value })
    }
    onmqualificationchange = (e) => {
        this.setState({ mqualification: e.target.value })
    }

    // address //
    online1change = (e) => {
        this.setState({ line1: e.target.value })
    }
    online2change = (e) => {
        this.setState({ line2: e.target.value })
    }
    oncitychange = (e) => {
        this.setState({ city: e.target.value })
    }
    onstatechange = (e) => {
        this.setState({ state: e.target.value })
    }
    oncountrychange = (e) => {
        this.setState({ country: e.target.value })
    }
    onzipcodechange = (e) => {
        this.setState({ zipcode: e.target.value })
    }


    click = (e) => {
        let olddata =   localStorage.getItem("student") ? JSON.parse(localStorage.getItem('student')) : []
        let alreadyRegistered = false
        for (let i = 0; i < olddata.length; i++) {
            if (olddata[i].email == this.state.email) {
                alert('this email is already taken');
                window.location.href = '/form'
                alreadyRegistered = true
            }
        }

        if (alreadyRegistered) {
            y.push({
                image: this.state.image,
                password: this.state.password,
                fname: this.state.fname,
                mname: this.state.mname,
                lname: this.state.lname,
                gender: this.state.gender,
                dob: this.state.dob,
                email: this.state.email,
                contact: this.state.contact,
                econtact: this.state.econtact,
                ffname: this.state.ffname,
                fmname: this.state.fmname,
                moname: this.state.moname,
                fflname: this.state.fflname,
                foccupation: this.state.foccupation,
                molname: this.state.molname,
                fqualification: this.state.fqualification,
                fcontact: this.state.fcontact,
                mqualification: this.state.mqualification,
                line1: this.state.line1,
                line2: this.state.line2,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                zipcode: this.state.zipcode,
                id: Date.now()
            })
            localStorage.setItem('student', JSON.stringify(y))
            window.location.href = '/table'
        }

        let y = localStorage.getItem("student") ? JSON.parse(localStorage.getItem('student')) : []

        if (this.state.currentdata == '') {

            if (y.length > 0) {
                let validEmail = false
                if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test((this.state.email)))) {
                    validEmail = true
                }
                // console.log('email :: ', this.state.email)

                if (validEmail) {
                    y.push({
                        image: this.state.image,
                        password: this.state.password,
                        fname: this.state.fname,
                        mname: this.state.mname,
                        lname: this.state.lname,
                        gender: this.state.gender,
                        dob: this.state.dob,
                        email: this.state.email,
                        contact: this.state.contact,
                        econtact: this.state.econtact,
                        ffname: this.state.ffname,
                        fmname: this.state.fmname,
                        moname: this.state.moname,
                        fflname: this.state.fflname,
                        foccupation: this.state.foccupation,
                        molname: this.state.molname,
                        fqualification: this.state.fqualification,
                        fcontact: this.state.fcontact,
                        mqualification: this.state.mqualification,
                        line1: this.state.line1,
                        line2: this.state.line2,
                        city: this.state.city,
                        state: this.state.state,
                        country: this.state.country,
                        zipcode: this.state.zipcode,
                        id: Date.now()
                    })


                    localStorage.setItem('student', JSON.stringify(y))
                    window.location.href = '/table'
                } else {
                    alert('please enter valid email')
                }
            } else {
                y.push({
                    image: this.state.image,
                    password: this.state.password,
                    fname: this.state.fname,
                    mname: this.state.mname,
                    lname: this.state.lname,
                    gender: this.state.gender,
                    dob: this.state.dob,
                    email: this.state.email,
                    contact: this.state.contact,
                    econtact: this.state.econtact,
                    ffname: this.state.ffname,
                    fmname: this.state.fmname,
                    moname: this.state.moname,
                    fflname: this.state.fflname,
                    foccupation: this.state.foccupation,
                    molname: this.state.molname,
                    fqualification: this.state.fqualification,
                    fcontact: this.state.fcontact,
                    mqualification: this.state.mqualification,
                    line1: this.state.line1,
                    line2: this.state.line2,
                    city: this.state.city,
                    state: this.state.state,
                    country: this.state.country,
                    zipcode: this.state.zipcode,
                    id: Date.now()
                })

                // this.setState({ Array: y })
                localStorage.setItem('student', JSON.stringify(y))
                window.location.href = '/table'
            }
        } else {

            let objIndex = y.findIndex((obj => obj.id == this.state.id));

            // console.log(y, objIndex, this.state.id)

            y[objIndex].dob = this.state.dob
            y[objIndex].password = this.state.pass
            y[objIndex].lname = this.state.lname
            y[objIndex].fname = this.state.fname
            y[objIndex].email = this.state.email
            y[objIndex].gender = this.state.gender

            localStorage.setItem('student', JSON.stringify(y))
            window.location.href = '/table' 
        }
    }

    render() {
        return (
            <Layout>
                <div className='main-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 abc'>
                                <h1 className='student detail'>Student Detail</h1>
                            </div>

                            <div className='col-auto'>
                                <div className='upload'>
                                    <img src={this.state.image} className="male" />
                                </div>
                            </div>

                            <div className='col-9 xyz'>
                                <h4 className='detail1'>Upload Your Image</h4>
                                <input type="file" id="myFile" className='button1' onChange={this.onimagechange} />
                            </div>
                        </div>
                        <div className='row row1'>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform'>First Name:</label>
                                </div>
                                <input type='text' value={this.state.fname} onChange={this.onfnamechange} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform'>Middle Name:</label>
                                </div>
                                <input type='text' value={this.state.mname} onChange={this.onmnamechange} />
                            </div>
                        </div>
                        <div className='row row3'>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform'>Last Name:</label>
                                </div>
                                <input type='text' value={this.state.lname} onChange={this.onlnamechange} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform'>Gender:</label>
                                </div>
                                <div className='radio' onChange={this.ongenderchange} value={this.state.gender} >
                                    <input type="radio" id="Male" name="fav_language" value="Male" />
                                    <label for="html">Male</label>
                                    <input type="radio" id="Female" name="fav_language" value="Female" />
                                    <label for="html">Female</label>
                                </div>
                            </div>

                        </div>
                        <div className='row row4'>
                            <div className='col-4 std'>
                                <div>
                                    <label for="birthday" className='lableform'>Birthday:</label>
                                </div>
                                <input type="date" id="birthday" name="birthday" value={this.state.dob} onChange={this.ondobchange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label for="email" className='lableform'>Enter your email:</label>
                                </div>
                                <input type="email" id="email" name="email" onChange={this.onemailchange} value={this.state.email} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label for="password" className='lableform'>Enter your password:</label>
                                </div>
                                <input type="password" id="password" name="password" onChange={this.onpasswordchange} value={this.state.password} />
                            </div>
                        </div>

                        {/* <div className='col-6 std'>
                                
                        </div> */}


                        <div className='row row5'>
                            <div className='col-6 std'>
                                <div>
                                    <label for="phone" className='lableform'>phone number:</label>
                                </div>
                                <input type="tel" id="phone" name="phone" onChange={this.oncontactchange} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label for="phone" className='lableform' >Emergency phone number:</label>
                                </div>
                                <input type="tel" id="phone" name="phone" onChange={this.onecontactchange} />
                            </div>
                        </div>

                        <div className='row  row6'>
                            <div className='col-12 abc'>
                                <h1 className='student detail'>Parent Detail</h1>
                            </div>

                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's First Name:</label>
                                </div>
                                <input type='text' onChange={this.onffnamechange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's Middle Name:</label>
                                </div>
                                <input type='text' onChange={this.onfmnamechange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>mother's Middle Name:</label>
                                </div>
                                <input type='text' onChange={this.onmonamechange} />
                            </div>

                        </div>



                        <div className='row  row7'>

                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's Last Name:</label>
                                </div>
                                <input type='text' onChange={this.onfflnamechange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's Occupation:</label>
                                </div>
                                <input type='text' onChange={this.onfoccupationchange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>mother's Last Name:</label>
                                </div>
                                <input type='text' onChange={this.onmolnamechange} />
                            </div>

                        </div>

                        <div className='row  row8'>

                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's Qualification:</label>
                                </div>
                                <input type='text' onChange={this.onfqualificationchange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>Father's contact:</label>
                                </div>
                                <input type='number' onChange={this.onfcontactchange} />
                            </div>
                            <div className='col-4 std'>
                                <div>
                                    <label className='lableform1'>mother's Qualificaion:</label>
                                </div>
                                <input type='text' onChange={this.onmqualificationchange} />
                            </div>

                        </div>

                        <div className='row  row8' >
                            <div className='col-12 abc'>
                                <h1 className='student detail'>Address</h1>
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform1'>Line 1</label>
                                </div>
                                <input type='text' onChange={this.online1change} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform1'>Line 2</label>
                                </div>
                                <input type='text' onChange={this.online2change} />
                            </div>
                        </div>

                        <div className='row  row8' >
                            <div className='col-6    std'>
                                <div>
                                    <label className='lableform1'>City</label>
                                </div>
                                <input type='text' onChange={this.oncitychange} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform1'>State</label>
                                </div>
                                <input type='text' onChange={this.onstatechange} />
                            </div>

                        </div>
                        <div className='row  row8' >
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform1'>Country</label>
                                </div>
                                <input type='text' onChange={this.oncountrychange} />
                            </div>
                            <div className='col-6 std'>
                                <div>
                                    <label className='lableform1'>zipcode</label>
                                </div>
                                <input type='number' onChange={this.onzipcodechange} />
                            </div>
                        </div>
                        <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
                        {/* <button className='click' >Save</button> */}
                    </div>

                </div>

            </Layout>
        );
    }
}
