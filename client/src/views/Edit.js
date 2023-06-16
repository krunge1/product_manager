import React, {useState} from 'react';
import SingleProductRouteHeader from '../components/SingleProductRouteHeader'
import UpdateProduct from '../components/UpdateProduct';

const Edit = (props) => {
    const {currentProducts, setCurrentProducts} = props;
    return (
        <div>
            <SingleProductRouteHeader/>
            <UpdateProduct  currentProducts={currentProducts} setCurrentProducts={setCurrentProducts}/>
        </div>
    )
}

export default Edit