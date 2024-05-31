import {NavLink ,Outlet} from 'react-router-dom'

const Product = () => {
      return (
    <div className="container bg-primary-subtle">
        <h2>Product main Page</h2>
        <div className="d-flex flex-row">
            <NavLink to="product1" className="p-2" >product1</NavLink>
            <NavLink to="product2" className="p-2" >product2</NavLink>
            <NavLink to="product3" className="p-2" >product3</NavLink>
        </div>
        <Outlet/>
        </div>
  )
}

export default Product