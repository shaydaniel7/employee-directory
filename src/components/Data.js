import React, { Component } from "react";
import Table from "./Table";
import getUsers from "../util/getRandomUsers";

export default class Data extends Component {
  state = {
    users: [],
    order: "descend"
  }

  componentDidMount() {
    getUsers().then(results => {
      this.setState({
        users: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <div>
          <Table users={this.state.users} />
        </div>
      </>
    );
  }
}