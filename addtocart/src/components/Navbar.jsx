import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../styles/navbar.css"
function Navbar({size,setShow}) {
  return (
      <nav>
          <div className='nav-box'>
              <p className='my-shop'>Vishal <span className='logo'>X</span></p>
              <div className="cart" onClick={()=>setShow(false)}>
                  <span>
                      <i className='fas fa-cart-plus'></i>
                  </span>
                  <span>{size}</span>
            </div>
          </div>
      </nav>
  )
}

export default Navbar