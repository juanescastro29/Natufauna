import React, {useState} from 'react'
import Menu from './Home'
import image3 from '../assets/sopa.png'

export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("complete datos faltantes||");
    } else {
      if (usu === "admi" && pas === "123") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("error de usuario o contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
       
      }
    }
  }


  return (
    
    <div className="container" style={{background:"lightgreen", marginTop:20, padding:20}}>
      
       
    <form id="form_login">
        <div>
            <h1 style={{color:"darkgreen", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu"  style={{textAlign:"center"} } className="form-control" onChange={(e)=> setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=> setPas(e.target.value)} required/>
        </div><br/>
        <input type="submit"  className="btn btn-primary" value="Login" onClick={iniciarSesion}/>
        <img  src={image3}/>
    </form>
    {miLogin==="true" && <Menu/> }
</div>
  )
}

export default Login;