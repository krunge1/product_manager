import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';

function App() {
  const [currentProducts, setCurrentProducts] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
