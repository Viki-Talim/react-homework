import React from "react";

export const Address = ({ users }) => {
  return (
    <div>
      <h2>Users from Skopje:</h2>
      {users.map(
        (user, i) =>
          user.adresa === "Skopje" && (
            <div key={i}>
              <p>
                {user.ime} {user.prezime} lives in: {user.adresa}
              </p>
            </div>
          ),
      )}
    </div>
  );
};
