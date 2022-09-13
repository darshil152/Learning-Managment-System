import React, { Component } from 'react'
import Layout from './layout'

export default class Table extends Component {
    render() {
        return (
            <Layout>
                <div className='container2'>
                    <table>
                        <tr className='heading'>
                            <th colspan="9">Student</th>
                            <th colspan="9">Parent</th>
                            <th colspan="6">Infornation</th>
                        </tr>
                        <tr className='val'>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Birthday</th>
                            <th>Email</th>
                            <th>Phno</th>
                            <th>ephno</th>

                            <th>Father's First Name:</th>
                            <th>Father's Middle Name:</th>
                            <th>mother's Middle Name:</th>
                            <th>Father's Last Name:</th>
                            <th>Father's Occupation:</th>
                            <th>mother's Last Name:</th>
                            <th>Father's Qualification:</th>
                            <th>Father's contact:</th>
                            <th>mother's Qualificaion:</th>


                            <th>Line1</th>
                            <th>line2</th>
                            <th>city</th>
                            <th>state</th>
                            <th>country</th>
                            <th>zipcode</th>
                        </tr>


                        {JSON.parse(localStorage.getItem('student')).map((items, i) => {
                            return (
                                <tr>
                                    <th><img src={items.image} className="table-pic" /></th>
                                    <th>{items.fname}</th>
                                    <th>{items.mname}</th>
                                    <th>{items.lname}</th>
                                    <th>{items.gender}</th>
                                    <th>{items.dob}</th>
                                    <th>{items.email}</th>
                                    <th>{items.contact}</th>
                                    <th>{items.econtact}</th>

                                   
                                    
                                    <th>{items.ffname}</th>
                                    <th>{items.fmname}</th>
                                    <th>{items.moname}</th>
                                    <th>{items.fflname}</th>
                                    <th>{items.foccupation}</th>
                                    <th>{items.molname}</th>
                                    <th>{items.fqualification}</th>
                                    <th>{items.fcontact}</th>
                                    <th>{items.mqualification}</th>
                               


                                    <th>{items.line1}</th>
                                    <th>{items.line2}</th>
                                    <th>{items.city}</th>
                                    <th>{items.state}</th>
                                    <th>{items.country}</th>
                                    <th>{items.zipcode}</th>
                                </tr>
                            )                      
                        })}

                    </table>
                </div>
            </Layout>

        )
    }
}
