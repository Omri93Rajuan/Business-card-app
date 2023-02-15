import { useState } from "react";

const UseStateWithArrayOfObjects = () => {
  const INITIAL_TODO = { todo: "" };
  const [task, setTask] = useState(INITIAL_TODO);
  const [tasks, setTasks] = useState([]);

  const createNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    return setTask(INITIAL_TODO);
  };

  return (
    <div>
      <form>
        <h5>
          Todo: <span style={{ fontWeight: "bolder" }}>{task.todo}</span>
        </h5>
        <input
          type="text"
          onChange={(e) => setTask({ ...task, todo: e.target.value })}
          value={task.todo}
        />
        <button onClick={createNewTask} disabled={!task.todo}>
          Create
        </button>
      </form>

      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {index + 1}. {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateWithArrayOfObjects;
