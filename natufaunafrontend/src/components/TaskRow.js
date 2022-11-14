export const TaskRow = ({ task, setTask, taskItems }) => {
    return(

        <tr>
        <td className="d-flex justify-content-between">
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