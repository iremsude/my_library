import './App.css';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import React, { useState , useEffect} from 'react';
import axios from 'axios';   




function App() {

  const [books, setBooks] = useState([]);
  return (
    <div className="App">

      <Navbar  setBooks= {setBooks}/>
    <Routes>
      <Route path='/' element={<Home books ={books} />}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
    </Routes>
    

    </div>
  );
}

export default App;
