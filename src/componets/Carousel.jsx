import React from 'react'

import '../App.css';


const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide"   data-bs-ride="carousel"  data-bs-interval="3000" data-bs-pause="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='../assets/c1.webp' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='../assets/c2.webp' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='../assets/c3.webp' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='../assets/c4.webp' className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
