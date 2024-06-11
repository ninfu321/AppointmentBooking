import react from "react";



function Reviews(){
    return <div className="Reviews">
    <div className="ReviewContainer">
    <h2>REVIEWS</h2>
    <p>Trusted By Many people with 100% certified reviews</p>
    <div style={{marginRight:'5px'}} id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active c-item">
      <img src="Review 1.png" class="d-block w-100 c-img" alt="..."/>
    </div>
    <div class="carousel-item c-item">
      <img src="Review 2.png" class="d-block w-100 c-img" alt="..."/>
    </div>
    <div class="carousel-item c-item">
      <img src="Review 3.png" class="d-block w-100 c-img" alt="..."/>
    </div>
    <div class="carousel-item c-item">
      <img src="Review 4.png" class="d-block w-100 c-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
    
    </div>
}

export default Reviews;