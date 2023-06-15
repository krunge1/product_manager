import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import DisplayOneProduct from './components/DisplayOneProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [currentProducts, setCurrentProducts] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default/>
          <Route element={<DisplayOneProduct/>} path="/products/:id"/>
          <Route element={<UpdateProduct/>} path="/products/edit/:id"/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
