import { useState } from "react";


export const TaskCreator = ({createTask}) => {
  const [newtask, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newtask)
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ingrese tarea"
        value={newtask}
        onChange={(e) => setTask(e.target.value)}
      />

      <button> guardar tarea</button>
    </form>
  );
};
