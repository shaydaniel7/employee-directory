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
  }

  render() {
    return (
    <div className="table-responsive">
      <table className="table table-bordered table-dark table-hover table-sm table-striped">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Address</th>
            {/* <th>Age</th> */}
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
                  {/* <td>{employees.dob.age}</td> */}
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