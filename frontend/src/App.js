import "./App.css";
import Animes from "./Components/Animes";
import Anime from "./Components/Anime";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import NewAnime from "./Components/NewAnime";

import Navbar from "./Components/Navbar";

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Animes/> } />
      <Route path='/:id' element={<Anime/>}/>
      <Route path='/new' element ={ <NewAnime/> }/>
      </Routes>
    </div>
  );
}

export default App;
