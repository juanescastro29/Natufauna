import {TaskRow} from "./TaskRow"
export  const TaskTable =({tasks, setTask,showCompleted = false}) => {

const taskTableRows =(doneValue) =>{
    //console.log(doneValue)
    return(
        tasks
        .filter(task=> task.done === doneValue)
        .map((task) => (
            <TaskRow taskItems={tasks} task={task} key={task.name} setTask={setTask}/>
           ))
    )
}


    return(

<table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
          taskTableRows(showCompleted)
          }

        </tbody>
      </table>


)

}