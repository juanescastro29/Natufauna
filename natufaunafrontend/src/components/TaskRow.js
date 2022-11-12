export const TaskRow = ({ task, setTask, taskItems }) => {
    return(

        <tr>
        <td>
          {task.name}
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => (
              setTask(
                taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
              )
            )}          
          />
        </td>
      </tr>
    )

};