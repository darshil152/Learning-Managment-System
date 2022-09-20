import React, { Component } from 'react'
import Layout from './layout'

export default class Table extends Component {

    state = {
        people: JSON.parse(localStorage.getItem('student')),
        // Array: [
        //     { id: 1, name: 'lean', country: 'India', number: '12' },
        //     { id: 2, name: 'bob', country: 'Egypt', number: '10' },
        //     { id: 6, name: 'ethan', country: 'Canada', number: '125' },
        //     { id: 9, name: 'alice', country: 'Denmark', number: '16' },
        //     { id: 5, name: 'carl', country: 'Austalia', number: '13' },
        // ],
    }

    click = (id) => {

        const filteredPeople = this.state.people.filter((item) => item.id !== id);

        this.setState({ people: filteredPeople })
        localStorage.setItem('student', JSON.stringify(filteredPeople))
    }

    click1 = (id) => {
        window.location.href = '/form/' + id;
    }

    handleSort = (type) => {

        let tempArrray = this.state.people

        tempArrray.sort((a, b) => {
            const nameA = a.fname.toUpperCase(); // ignore upper and lowercase
            const nameB = b.fname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        console.log('temp :: ', tempArrray)
        
        if (type === 'ace') {
            console.log('ace', tempArrray)
            this.setState({ Array: tempArrray })
        } else {
            console.log('dec')
        }
    }

    
    render() {
        return (
            <Layout>
                <div className='main-section'>
                    <buton onClick={() => this.handleSort('ace')}>sort in ace</buton><br />
                    <buton onClick={() => this.handleSort('dec')}>sort in dec</buton>
                    <table>
                        <tr className='heading'>
                            <th colspan="9">Student</th>
                            <th colspan="9">Parent</th>
                            <th colspan="6">Infornation</th>
                            <th colSpan="2">Action</th>
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

                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>


                        {this.state.people.map((items, i) => {
                            return (
                                <tr >

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
                                    <th><button onClick={() => this.click1(items.id)}>Edit</button></th>
                                    <th><button onClick={() => this.click(items.id)}>Delete</button></th>
                                </tr>
                            )
                        })}

                    </table>
                </div>
            </Layout>

        )
    }
}
