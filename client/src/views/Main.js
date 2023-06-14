import React, {useState} from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import DisplayForm from '../components/DisplayForm';

const Main = () => {
    const [currentProducts, setCurrentProducts] = useState([])
    return (
        <div>
            <Header/>
            <Form currentProducts={currentProducts} setCurrentProducts={setCurrentProducts}/>
            <DisplayForm currentProducts={currentProducts} setCurrentProducts={setCurrentProducts}/>
        </div>
    )
}

export default Main