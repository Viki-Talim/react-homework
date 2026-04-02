import React from "react";

export const Age = ({users}) => {
    return(
        <div>
          <h2>Users older than 18:</h2>  
          {users.map((user, i) => (
            <div key={i}>
                {user.godini >= 18 ? (<p>{user.ime} {user.prezime} {user.godini} years old. </p>)
                : (
                    <p>Less than 18</p>
                )}
            </div>
          ))}
        </div>
    )
}