import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

export default class Search extends Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
        key: "jason",
        value:'macky',
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
    {
        key:'kala',
        valyr:'peter'
    },
  ];

  render() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={(record) => console.log(record)}
      />
    );
  }
}