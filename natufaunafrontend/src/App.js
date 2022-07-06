import "./App.css";
import Cards from "./components/Cards";
import Navbar from './components/Navbar'
import Adopciones from './components/Adopcion'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards />
    </div>
  );
}

export default App;