import React, { Component } from "react";
import $ from "jquery";
import Table from "rc-table";
import "../components/styles.css";
import { Modal,Button } from "react-materialize";
import Form from "./form";
let c = 10;
const columns = [
  {
    title: "S.no",
    dataIndex: "sno",
    key: "sno",
    width: 50
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
    width: 250
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
    flag: null
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(a => this.setState({ person: a }));
  }
  dat = () => {
    let data = [];

    this.state.person.map((a,index) =>
      data.push({
        sno: index+1,
        name: a.name,
        address: a.email,
        key: a.id,
        op: (
          <div>
            <button
              id={a.id}
              class="btn btn-danger custom"
              onClick={i => this.del(a.id)}
            >
              Delete
            </button>
            <div class="">
              <Modal
                fixedFooter
                header="Information"
                actions={
                  <div>
                    <Button modal="close" waves="light" className="btn btn-info">Submit</Button></div>}
                trigger={<button class="btn btn-success custom">Add</button>}
              >
                <Form
                  p={this.state.person}
                  onForm={this.handleForm}
                  onChangeValue={this.handleChangeValue}
                />
              </Modal>
            </div>
          </div>
        )
      })
    );
    return data;
  };
  handleChangeValue = e => {
    let co = c++;
    let data = { id: co, name: "", address: "", key: c };
    let n;
    let em;
    if (e.target["id"] === "name") {
      n = e.target.value;
      this.setState({ flag: n });
    }
    if (e.target["id"] == "email") {
      em = e.target.value;
      data["email"] = em;
    }
    if (this.state.flag != null) {
      data['name']=this.state.flag
      let f = this.state.person;
      f.push(data);
      this.setState({flag:null})
    }
  };
  del = id => {
    let ans = this.state.person.filter(i => i.id != id);
    this.setState({ person: ans });
  };

  render() {
    let d = this.dat();
    console.log(this.state.person);
    return (
      <div class="bg-light table">
        <Table columns={columns} data={d} />
      </div>
    );
  }
}

export default Users;
