import React from 'react'
import '../App.css';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <img src="../assets/logo.webp" alt="" style={{height:'50px'}}/>
    <a className="navbar-brand  ms-5" style={{color:'red'}} href="#">N Mart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item ">
          <a className="nav-link active text-warning ms-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-5" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white ms-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mobiles</a></li>
            <li><a className="dropdown-item" href="#">Washing Machine</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Fashion Ware</a></li>
          </ul>
          
        </li>
      <div className='mt-2'><img className='ms-5' src="../assets/cart.svg" alt="" /><span  className='mt-3'>Cart</span></div>
      <div  className='mt-2'><img  className='ms-5' src="../assets/account.svg" alt="" /><span className='mt-2'>Account</span></div>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
