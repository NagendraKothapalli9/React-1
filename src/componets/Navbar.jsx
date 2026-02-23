import React from 'react'
import '../App.css';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <div style={{backgroundColor:'white'}}>
    <img src="../assets/logo.webp" alt="" style={{height:'50px'}}/>
    <a className="navbar-brand " style={{color:'red',backgroundColor:'white',fontSize:'23px'}} href="#">N Mart</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item ">
          <link className="nav-link active text-danger ms-5" aria-current="page" href="#">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link text-white ms-5" href="#">About</link>
        </li>
        <li className="nav-item dropdown">
          <link className="nav-link dropdown-toggle text-white ms-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </link>
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" href="#">Mobiles</link></li>
            <li><link className="dropdown-item" href="#">Washing Machine</link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><link className="dropdown-item" href="#">Fashion Ware</link></li>
          </ul>
          
        </li>
        
      </ul>
      <link> <img className='ms-5' src="../assets/cart.svg" alt="" /></link>
      <link><img  className='ms-3 me-5' src="../assets/account.svg" alt="" /></link> 
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <img src="../assets/search.svg" alt="" />
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
