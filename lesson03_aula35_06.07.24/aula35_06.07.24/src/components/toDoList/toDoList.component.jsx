import "./toDoList.style.css";
import { useState } from "react";

function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [task, setTaks] = useState("");

  const addTodo = () => {
    setToDos([...toDos, task]);
    setTaks("");
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        id="text-input"
        type="text"
        value={task}
        onChange={(e) => setTaks(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {toDos.map((toDo, index) => (
          <div className="tasks">
            <li key={index}>{toDo}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
