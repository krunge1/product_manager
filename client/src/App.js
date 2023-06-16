import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ViewOne from './views/ViewOne';
import Edit from './views/Edit';

function App() {
  const [currentProducts, setCurrentProducts] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default/>
          <Route element={<ViewOne/>} path="/products/:id"/>
          <Route element={<Edit/>} path="/products/edit/:id"/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
