import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = data;
      setTodos(updatedTodos);
      setEditIndex(null);
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
    setEditIndex(index);
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
          />{" "}
          &nbsp;&nbsp;
        </label>
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} &nbsp;&nbsp;
            <button onClick={() => editHandler(index)}>Edit</button> &nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
