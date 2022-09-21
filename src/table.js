import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: JSON.parse(localStorage.getItem("student")),

      columns: [
        {
          name: "id",
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <Link to={'/form/' + value} >
                  <button >
                    Edit
                  </button>
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
                <Link to={'/form/' + value} >
                  <button >
                    View
                  </button>
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
    console.log(this.state.people)
    //  var people=  JSON.parse(localStorage.getItem("student"));
    //  console.log('email',this.state,people.fname)
  }

  render() {

    return (
      <div>
        <button type="button" onClick={this.handlebutton} class="mt-3 mb-3  btn btn-primary">Add Student</button>

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

