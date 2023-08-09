function OpeningImg() {
    return (
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src="https://source.unsplash.com/1400x450/?Macbook" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
              <h4>Welcome to our page</h4>
              <p>We are consulting for your business finances.</p>
              <button className="btn btn-primary">Start now</button> {/* Added button */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default OpeningImg;
  