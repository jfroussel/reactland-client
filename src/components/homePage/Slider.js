import React from 'react'

const Slider = () => {
    return (
        <div className="container">
            <section className="slider">
                <div className="page-section text-center">
                    <h2 className="page-section__title">WHAT CLIENT SAY?</h2>
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">

                        <div className="carousel-inner">
                            <div className="item active">
                                <img className="img-responsive slider__image" src="assets/images/slider-image.png" alt="" />
                                <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <h3 className="slider__name">Sheryl D</h3>
                                <p className="slider__title">UI Design Agency</p>
                            </div>

                            <div className="item">
                                <img className="img-responsive slider__image" src="assets/images/slider-image.png" alt="" />
                                <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <h3 className="slider__name">Sheryl D</h3>
                                <p className="slider__title">UI Design Agency</p>
                            </div>

                            <div className="item">
                                <img className="img-responsive slider__image" src="assets/images/slider-image.png" alt="" />
                                <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                <h3 className="slider__name">Sheryl D</h3>
                                <p className="slider__title">UI Design Agency</p>
                            </div>
                        </div>


                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <i className="material-icons">chevron_left</i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <i className="material-icons">chevron_right</i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider