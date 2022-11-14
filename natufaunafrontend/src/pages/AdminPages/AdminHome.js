import { useState, useEffect } from "react";
import React from "react";
import { TaskCreator } from "../../components/TaskCreator";
import { TaskTable } from "../../components/TaskTable";
import { Visibility } from "../../components/Visibility";

const AdminHome = () => {
  const [taskItems, setTask] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function createTask(taskName) {
    console.log(taskName);
    if (!taskItems.find((task) => task.name === taskName)) {
      setTask([...taskItems, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTask(JSON.parse(data));
    }
  }, []);

  const cleanTasks =() =>{
    setTask(taskItems.filter(task => !task.done))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="background">
      
      <br />
      <div className="container col-md-5 offset-md-4">
      <TaskCreator createTask={createTask} />
      <TaskTable tasks={taskItems} setTask={setTask} />
      <Visibility
      setShowCompleted={(checked) =>setShowCompleted(checked)}
      cleanTasks={cleanTasks}
      />
      {showCompleted === true && (
        <TaskTable
          tasks={taskItems}
          setTask={setTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
    </div>
  );
};

export default AdminHome;
