export const Visibility =({setShowCompleted, cleanTasks}) =>{
const handleDelete =() =>{
    if(window.confirm('esta seguro de eliminarlo?')){
        cleanTasks()
    }
}
return (
<div>
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label> TAREAS REALIZADAS</label>
      <button onClick={handleDelete}>
        ELIMINAR TAREAS
      </button>
      
      </div>

)

}