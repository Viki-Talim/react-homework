import React, { useState } from "react";
import { Input } from "./Input";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [comment, setComment] = useState("");
  const [isMultiline, setIsMultiline] = useState(false);

  const toggleCommentMode = () => {
    setIsMultiline(!isMultiline);
  };

  const [inputType, setInputType] = useState("password");
  const [showTable, setShowTable] = useState(false);
  
const showPassword = () => setInputType("text");
const hidePassword = () => setInputType("password");

  const handleTableDisplay = (e) => {
    e.preventDefault();
    setShowTable(!showTable);
  };
  return (
    <div id="signup">
      <h2>Sign Up</h2>
      <form>
        <Input
          type="text"
          placeholder={"Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder={"First Name"}
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder={"Last Name"}
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder={"Enter Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="togglePass"
          type={inputType}
          placeholder={"Type Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          showPasswordProp={showPassword} 
  hidePasswordProp={hidePassword}
         
        />
        <Input
          name="comment"
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          isMultiline={isMultiline}
          setToggle={toggleCommentMode}
        />
        <br />
        <button
          type="button"
          onClick={handleTableDisplay}
          className="action-button"
        >
          {showTable ? "Hide Table" : "Show Table"}
        </button>
      </form>
      <hr />
      {showTable && (
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{email}</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
