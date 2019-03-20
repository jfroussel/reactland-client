import React from 'react'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="page-section">
                    <div className="text-center">
                        <h2 className="page-section__title">ABOUT DART AGENCY</h2>
                        <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="row gutters-50">
                        <div className="about--narrow">
                            <div className="col-md-6">
                                <img className="img-responsive" src="assets/images/about-pic.png" alt="" />
                            </div>
                            <div className="col-md-6 about__extra-padding">
                                <h3 className="about__content-title">We Believe <br />The Simple Design</h3>
                                <p className="about__content-subTitle">Trusted comes with tons of custom widgets, color options, font control and
                  much more.</p>
                                <p className="about__content-paragraph">We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.</p>
                                <a className="button--light" href="#">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About