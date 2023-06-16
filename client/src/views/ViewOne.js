import React, {useState} from 'react';
import SingleProductRouteHeader from '../components/SingleProductRouteHeader'
import DisplayOneProduct from '../components/DisplayOneProduct';

const ViewOne = (props) => {
    return (
        <div>
            <SingleProductRouteHeader/>
            <DisplayOneProduct/>
        </div>
    )
}

export default ViewOne