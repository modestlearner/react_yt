import React, { Component } from "react";
import $ from "jquery";
import Table from "rc-table";
import "../components/styles.css";

const columns = [
  {
    title: "S.no",
    dataIndex: "sno",
    key: "sno",
    width: 300
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 300
  },
  {
    title: "Email",
    dataIndex: "address",
    key: "address",
    width: 300
  },
  {
    title: "Operations",
    dataIndex: "op",
    key: "operations",
    width: 100
  }
];

class Users extends Component {
  state = {
    person: [],
    person1: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(a => this.setState({ person: a }));
  }
  dat = () => {
    let data = [];

    this.state.person.map(a =>
      data.push({
        sno: a.id,
        name: a.name,
        age: 28,
        address: a.email,
        key: a.id,
        op: (
          <button
            id={a.id}
            class="btn btn-danger"
            onClick={i => this.del(a.id)}
          >
            Delete
          </button>
        )
      })
    );
    return data;
  };
  del = id => {
    console.log(id);
    let ans = this.state.person.filter(i => i.id != id);
    this.setState({ person: ans });
  };

  render() {
    let d = this.dat();
    console.log(this.state.person[0]);
    return (
      <div class="bg-light table">
        <Table columns={columns} data={d} />
      </div>
    );
  }
}

export default Users;
