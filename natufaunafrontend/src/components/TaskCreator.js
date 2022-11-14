import { useState } from "react";


export const TaskCreator = ({createTask}) => {
  const [newtask, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newtask)
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="ingrese tarea"
        value={newtask}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"      
      />
      </div>
      <div className="col-3">
      <button className="btn btn-success btn-sm"> GUARDAR TAREA </button>
      </div>
    </form>
  );
};
