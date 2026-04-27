import React, { useState } from "react";
import { Todos } from "./components/Todos";

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
      const newObject = {
        id: Math.floor(maxId + 1),
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function markTodoAsDone(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function saveEdit(id, newText) {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  }

  const completedCount = todos.filter((t) => t.done).length;

  const filteredTodos = showCompleted ? todos : todos.filter((t) => !t.done);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Element"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTodo}>Add Element</button>

      {todos.length === 0 ? (
        <h1>No Items added to Array yet !!!</h1>
      ) : (
        <>
          <h2>Number of completed Items: {completedCount}</h2>
          <button onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? "Hide Completed" : "Show Completed"}
          </button>

          <Todos
            todos={filteredTodos}
            markTodoAsDone={markTodoAsDone}
            deleteTodo={deleteTodo}
            saveEdit={saveEdit}
          />
        </>
      )}
    </div>
  );
}
