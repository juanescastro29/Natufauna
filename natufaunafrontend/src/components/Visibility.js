export const Visibility =({setShowCompleted, cleanTasks}) =>{
const handleDelete =() =>{
    if(window.confirm('esta seguro de eliminarlo?')){
        cleanTasks()
    }
}
return (
<div className="bg-dark d-flex justify-content-between text-white
text-center p-2 border-primary">
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label> TAREAS REALIZADAS</label>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        ELIMINAR TAREAS
      </button>
      
      </div>

)

}