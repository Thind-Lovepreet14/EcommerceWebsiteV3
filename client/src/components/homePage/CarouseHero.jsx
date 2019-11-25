import React from 'react'

const CarouselHero = () => { 
    return (
        <>
            <div className="home-container">
                <div className="lt-image-slideshow">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../images/bg-img-1.jpg" alt="First slide" />
                                <div className="carousel-caption-0 d-md-block heroFont">
                                    <h1>Run<span className="yellow-text">4</span>It</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../images/bg-img-2.jpg" alt="Second slide" />
                                <div className="carousel-caption-1 d-md-block heroFont">
                                    <h1><span className="yellow-text">Athletic</span> Apparel</h1>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselHero