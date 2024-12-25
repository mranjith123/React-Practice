import React, { useState } from "react";
import "../App.css";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTodoIndex ? data : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodoIndex(null);
    } else {
      const newTodos = [...todos, data];
      setTodos(newTodos);
    }
    setData("");
  };

  const deleteHandler = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editHandler = (index) => {
    setData(todos[index]);
    setIsEditing(true);
    setCurrentTodoIndex(index);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            name="data"
            value={data}
            onChange={changeHandler}
          /> &nbsp;&nbsp;
        </label>

        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="name">{todo}</span>
            <button onClick={() => editHandler(index)}>Edit</button> &nbsp;&nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
