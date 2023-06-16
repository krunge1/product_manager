import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h1>Product Manager</h1>
        <Link to={"/products"}>Home</Link>
    </div>
  )
}

export default Header