import React from "react";
import userInfo from "./userInfo";

function Table({ users }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Profile Photo</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Phone Number</th>

          </tr>
        </thead>
        <userInfo users={users} />
      </table>
    </div>
  );
}

export default Table;