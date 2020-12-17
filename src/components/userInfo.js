import React from "react";

function userInfo({ users }) {
  return (
    <tbody>
      {users.map(({ login, picture, name, email }) => {
          return (
            <tr key={login.uuid}>
              <td>
                <img
                  src={picture.medium}
                  alt={`${name.first} ${name.last}`}
                />
              </td>
              <td>
                {name.first} {name.last}
              </td>
              <td>
                {email}
              </td>
            </tr>
          );
        })
      }
    </tbody>
  );
}

export default userInfo;