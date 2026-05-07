import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsersSuccess } from "./duck/actions";
export const UsersComponent = ({ listOfUsers, error }) => {
  const dispatch = useDispatch();
  return (
    <div id="users-component">
      {!error ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteUsersSuccess(user.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
