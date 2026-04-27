import React, { useState } from "react";

export const Todos = ({ todos, markTodoAsDone, deleteTodo, saveEdit }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    saveEdit(id, editText);
    setEditId(null);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>
              {editId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </td>
            <td>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => markTodoAsDone(todo.id)}
              />
            </td>
            <td>
              {editId === todo.id ? (
                <>
                  <button onClick={() => handleSave(todo.id)}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  <button onClick={() => handleEdit(todo)}>Edit</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
