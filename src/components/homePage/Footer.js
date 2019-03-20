import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer--bg">
            <div className="container">
                <div className="page-section">
                    <div className="row gutters-100">
                        <div className="col-md-4 col-lg-3">
                            <div className="footer__first">
                                <h2 className="footer__title">DART AGENCY</h2>
                                <p className="footer-first__paragraph">Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <ul className="footer-first__social-icons">
                                    <li><a href="#home"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                    <li><a href="#home"><i className="flaticon-twitter-logo"></i></a></li>
                                    <li><a href="#home"><i className="flaticon-dribbble-logo"></i></a></li>
                                    <li><a href="#home"><i className="flaticon-behance-logo"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="footer__second">
                                <h2 className="footer__title">QUICK LINK</h2>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#home">About Us</a></li>
                                    <li><a href="#home">Service</a></li>
                                    <li><a href="#home">Blog</a></li>
                                    <li><a href="#home">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer__third">
                                <h2 className="footer__title">CONTACT US</h2>
                                <ul>
                                    <li><span className="glyphicon glyphicon-envelope"></span> <a href="#home">dartagency@gmail.com</a></li>
                                    <li><span className="glyphicon glyphicon-earphone"></span> <a href="#home">+0123-345-6789</a></li>
                                </ul>
                                <h4 className="footer__subscribe__title">Subscribe</h4>
                                <div className="subscribe-section">
                                    <input type="email" className="form-control" size="50" placeholder="Enter Your Email" required />
                                    <button className="subscribe-section__button" type="button"><img src="assets/images/send-icon.png" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer__fourth">
                                <h4 className="footer__title">INSTAGRAM</h4>
                                <div className="row">
                                    <ul>
                                        <li><a href="#home"><img src="assets/images/instagram-pic1.png" alt="" /></a></li>
                                        <li><a href="#home"><img src="assets/images/instagram-pic2.png" alt="" /></a></li>
                                        <li><a href="#home"><img src="assets/images/instagram-pic3.png" alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <ul>
                                        <li><a href="#home"><img src="assets/images/instagram-pic4.png" alt="" /></a></li>
                                        <li><a href="#home"><img src="assets/images/instagram-pic5.png" alt="" /></a></li>
                                        <li><a href="#home"><img src="assets/images/instagram-pic6.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="footer__horizontal-bar" />
                    <p className="footer__bottom-paragraph">&copy; Copyright 2017 <a href="#home" style={{color: "#00aafe",fontWeight:"bold"}}>DartThemes</a>. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer