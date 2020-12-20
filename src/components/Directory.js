import React, { Component } from "react";
import getRandomUsers from "./utilities/getRandomUsers"
import "../styles.css"

class Directory extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    getRandomUsers().then(peeps => {
      this.setState({
        users: peeps.data.results,
      });
      console.log(peeps)
    });
  };

  sortFirst = () => {
    var sortedFirst = [...this.state.users];
    sortedFirst = sortedFirst.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0
    });
    this.setState({
      users: sortedFirst
    })
  }

  sortLast = () => {
    var sortedLast = [...this.state.users];
    sortedLast = sortedLast.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0
    });
    this.setState({
      users: sortedLast
    })
  }

  searchEmployees = (e) => {
    console.log(e);
    var searchedEmployees = this.state.users.filter(user => {
      return user.name.first.toLowerCase().includes(e) ||  user.name.last.toLowerCase().includes(e)
    });
    this.setState({
      users: searchedEmployees
    })
  }

  render() {

    return (
      <div className="table-responsive">
        <input className="searchbar" placeholder="search for an employee" onChange = {(e) => this.searchEmployees(e.target.value)}></input>
        <table className="table table-bordered table-dark table-hover table-sm table-striped">
          <thead>
            <tr>
              <th>Photo</th>
              <th>First<button onClick={this.sortFirst} className="az sm">sort a-z</button></th>
              <th>Last<button onClick={this.sortLast} className="az sm">sort a-z</button></th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>

            </tr>
          </thead>
          <tbody>
            {this.state.users.map(employees => {
              return (
                <tr>
                  <td>
                    <img src={employees.picture.medium} alt={employees.name.first + " " + employees.name.last}></img></td>
                  <td>{employees.name.first}</td>
                  <td>{employees.name.last}</td>
                  <td>{employees.email}</td>
                  <td>{employees.location.street.number + " " + employees.location.street.name + ", " + employees.location.city + ", " + employees.location.state + " " + employees.location.postcode}</td>
                  <td>{employees.phone}</td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}



export default Directory;