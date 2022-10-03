import { ClickAwayListener } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      people: localStorage.getItem("student")? JSON.parse(localStorage.getItem("student")):[],

      columns: [
        {
          name: "id",
          lable: 'Edit',
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <Link to={'/form/' + value} >
                  {/* <button className="btn btn-primary edit">
                    Edit
                  </button> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/wloilxuq.json"
                    trigger="hover"></lord-icon>    
                </Link>
              );
            }
          }
        },
        {
          name: "id",
          label: 'View',
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <Link to={'/view/' + value} >
                  {/* <button >
                    View
                  </button> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/tyounuzx.json"
                    trigger="hover">
                  </lord-icon>
                </Link>
              );
            }
          }
        },
        {
          name: "image",
          label: "Image",
          options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => (
              <img src={value} className="profilepic" />
            )
          },
        },
        {
          name: "fname",
          label: "Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "lname",
          label: "lname",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "email",
          label: "email",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "password",
          label: "password",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "country",
          label: "country",
          op: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "state",
          label: "state",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "city",
          label: "city",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "gender",
          label: "gender",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "contact",
          label: "contact",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "dob",
          label: "Birthday",
          options: {
            filter: true,
            sort: false,
          },
        },
      ],
      options: {
        filterType: "checkbox",
      },
    };

  }

  hanldeEdit = (id) => {
    window.location.href = '/form/' + id;
  }

  handlebutton = (e) => {
    window.location.href = '/form'
  }

  componentDidMount() {
    // console.log(this.state.people)
    //  var people=  JSON.parse(localStorage.getItem("student"));
  }


  render() {
    return (
      <div>
        <Link to={'/form'} >
          <button className="btn btn-primary edit mt-3 mb-3">
            Add Student
          </button>
        </Link>

        {/* <button type="button" onClick={this.handlebutton} class="mt-3 mb-3  btn btn-primary">Add Student</button> */}

        <MUIDataTable
          title={'Employee Data'}
          data={this.state.people}
          columns={this.state.columns}
          options={this.state.options}
        />
      </div>
    );
  }
}


// 	import React, { Component } from "react";
	// import Form from "./form";
	// import Layout from "./layout";

	// export default class Table extends Component {
	//   constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  people: JSON.parse(localStorage.getItem("student")),
	// 	};
	//   }

	//   click = (id) => {

	// 	const newPeople = this.state.people.filter((items) => items.id !== id);
	// 	this.setState({ people: newPeople });
	// 	localStorage.setItem("student", JSON.stringify(newPeople));
	//   };

	//   click1 = (id) => {
	// 	window.location.href = "/form/" + id;
	//   };


	//  handleSort = (type) => {

	// 	let tempArrray = this.state.people

	// 	tempArrray.sort((a, b) => {
	// 	  const nameA = a.fname.toUpperCase(); // ignore upper and lowercase
	// 	  const nameB = b.fname.toUpperCase(); // ignore upper and lowercase
	// 	  if (nameA < nameB) {
	// 		return -1;
	// 	  }
	// 	  if (nameA > nameB) {
	// 		return 1;
	// 	  }
	// 	  return 0;
	// 	});
	// 	console.log('temp :: ', tempArrray)

	// 	if (type === 'ace') {	
	// 	  console.log('ace', tempArrray)
	// 	  this.setState({ Array: tempArrray })
	// 	} else {
	// 	  console.log('dec')
	// 	}
	//   }
	//   render() {
	// 	return (
	// 	  <Layout>
	// 		<div className="main-section col-3 pt-3">
	// 		  <button
	// 			type="button"
	// 			class="btn btn-primary"
	// 			onClick={() => this.onhandleevent(this.state.type)}
	// 		  >
	// 			Ascending
	// 		  </button>
	// 		  {/* <button type="button" class="btn btn-primary" onClick={ () => this.onhandleevent(this.state.type)}>Descending Orders</button> */}

	// 		  <h1>Personal Detail</h1>

	// 		  <table>
	// 			<tr className="heading">
	// 			  <th colspan="9">Student</th>
	// 			  <th colspan="9">Parent</th>
	// 			  <th colspan="6">Infornation</th>
	// 			  <th colSpan="2">Action</th>
	// 			</tr>
	// 			<tr className="val">
	// 			  <th>Image</th>
	// 			  <th>First Name</th>
	// 			  <th>Middle Name</th>
	// 			  <th>Last Name</th>
	// 			  <th>Gender</th>
	// 			  <th>Birthday</th>
	// 			  <th>Email</th>
	// 			  <th>Phno</th>
	// 			  <th>ephno</th>

	// 			  <th>Father's First Name:</th>
	// 			  <th>Father's Middle Name:</th>
	// 			  <th>mother's Middle Name:</th>
	// 			  <th>Father's Last Name:</th>
	// 			  <th>Father's Occupation:</th>
	// 			  <th>mother's Last Name:</th>
	// 			  <th>Father's Qualification:</th>
	// 			  <th>Father's contact:</th>
	// 			  <th>mother's Qualificaion:</th>

	// 			  <th>Line1</th>
	// 			  <th>line2</th>
	// 			  <th>city</th>
	// 			  <th>state</th>
	// 			  <th>country</th>
	// 			  <th>zipcode</th>

	// 			  <th>Edit</th>
	// 			  <th>Delete</th>
	// 			</tr>

	// 			{this.state.people.map((items, i) => {
	// 			  return (
	// 				<tr>
	// 				  <th>
	// 					<img src={items.image} className="table-pic" />
	// 				  </th>
	// 				  <th>{items.fname}</th>
	// 				  <th>{items.mname}</th>
	// 				  <th>{items.lname}</th>
	// 				  <th>{items.gender}</th>
	// 				  <th>{items.dob}</th>
	// 				  <th>{items.email}</th>
	// 				  <th>{items.contact}</th>
	// 				  <th>{items.econtact}</th>

	// 				  <th>{items.ffname}</th>
	// 				  <th>{items.fmname}</th>
	// 				  <th>{items.moname}</th>
	// 				  <th>{items.fflname}</th>
	// 				  <th>{items.foccupation}</th>
	// 				  <th>{items.molname}</th>
	// 				  <th>{items.fqualification}</th>
	// 				  <th>{items.fcontact}</th>
	// 				  <th>{items.mqualification}</th>

	// 				  <th>{items.line1}</th>
	// 				  <th>{items.line2}</th>
	// 				  <th>{items.city}</th>
	// 				  <th>{items.state}</th>
	// 				  <th>{items.country}</th>
	// 				  <th>{items.zipcode}</th>
	// 				  <th>
	// 					<button onClick={() => this.click1(items.id)}class="btn btn-primary" >Edit</button>
	// 				  </th>
	// 				  <th>
	// 					<button onClick={() => this.click(items.id)} class="btn btn-danger">Delete</button>
	// 				  </th>
	// 				</tr>
	// 			  );
	// 			})}
	// 		  </table>
	// 		</div>
	// 	  </Layout>
	// 	);
	//   }
	// }
